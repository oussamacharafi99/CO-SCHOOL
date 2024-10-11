package com.CO_SCHOOL.config;
import com.CO_SCHOOL.enums.Role;
import com.CO_SCHOOL.services.PersonDetailsImp;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import java.lang.reflect.Method;

@Configuration
@EnableWebSecurity
public class ConfigSecurity {

    private final PersonDetailsImp personDetailsImp;

    public ConfigSecurity(PersonDetailsImp personDetailsImp) {
        this.personDetailsImp = personDetailsImp;
    }

    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .csrf(AbstractHttpConfigurer::disable)
                .authorizeHttpRequests(expressionInterceptUrlRegistry ->
                        expressionInterceptUrlRegistry
                                .requestMatchers("api/auth/login").permitAll()
                                .requestMatchers("api/chat/ask").permitAll()
                                .requestMatchers("/api/auth/get+person/**").permitAll() // all roles
                                .requestMatchers("api/auth/change+password/**", "api/eleve/get+eleve+by+id/**").permitAll()
                                .requestMatchers("api/eleve/get+all","api/eleve/get+all/**", "api/eleve/get+absences+eleve+by+classe+id/**", "api/eleve/get+absences+eleves").permitAll()
                                .requestMatchers("api/eleve/add", "api/prof/add", "api/parent/add").permitAll()
                                .requestMatchers("api/eleve/update/**", "api/prof/update/**", "api/eleve/get+eleve+by+id/**", "api/prof/get+prof+by+id/**").permitAll()
                                .requestMatchers("api/prof/get+all","api/prof/get+all+class+room/**").permitAll()
                                .requestMatchers("api/examen/get+examen+by+prof/**").permitAll()
                                .requestMatchers("api/examen/get+examen+inassign/**" , "api/examen/get+examen+inassign+by+prof+id/**").permitAll()
                                .requestMatchers("api/examen/update+examen/**").permitAll()
                                .requestMatchers("api/examen/**").permitAll()

                                .requestMatchers("api/examen_eleve/result/total/**","api/examen_eleve/result/**","api/examen_eleve/result/examen+date/**").permitAll()
                                .requestMatchers("api/examen_eleve/examen+prof+without+note/**").permitAll()
                                .requestMatchers("api/examen_eleve/examen+prof+encoure+correction/**","api/examen_eleve/examen+prof+correction+terminer/**","api/examen_eleve/get+exams+by+eleve+prof/**").permitAll()
                                .requestMatchers("/api/examen_eleve/delete").permitAll()
                                .requestMatchers("api/examen_eleve/**").permitAll()
                                
                                .requestMatchers("api/classeGroup/Prof_eleves/**").permitAll()
                                .requestMatchers("api/classeGroup/profs+class/**","api/classeGroup/get+class+by+prof+id/**").permitAll()
                                .requestMatchers("api/classeGroup/save" ,"api/classeGroup/get+all", "api/classeGroup/get+classe+by+prof+id/**").permitAll()
                                .requestMatchers("api/classeGroup/**").permitAll()
                                .requestMatchers("api/absence/get+all+by:/**", "api/absence/insert").permitAll()
                                .requestMatchers("api/absence/**").permitAll()

                                .requestMatchers("api/classe+prof/assign").permitAll()
                                .anyRequest().authenticated()
                )
                .formLogin(AbstractHttpConfigurer::disable);
                http.cors(Customizer.withDefaults());

        http.addFilterBefore(new JwtAuthorizationFilter(), UsernamePasswordAuthenticationFilter.class);
        return http.build();
    }

    @Bean
    public AuthenticationManager authenticationManager(HttpSecurity http) throws Exception {
        AuthenticationManagerBuilder authenticationManagerBuilder = http.getSharedObject(AuthenticationManagerBuilder.class);
        authenticationManagerBuilder.userDetailsService(personDetailsImp).passwordEncoder(passwordEncoder());
        return authenticationManagerBuilder.build();
    }


}
