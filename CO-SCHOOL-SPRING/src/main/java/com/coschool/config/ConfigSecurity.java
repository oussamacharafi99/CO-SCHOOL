package com.coschool.config;


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

import com.coschool.services.PersonDetailsImp;

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
                                .requestMatchers("/api/auth/get+person/**").hasAnyRole("PROF","ADMIN","ELEVE")
                                .requestMatchers("api/eleve/get+eleve+by+id/**").hasAnyRole("ADMIN","ELEVE","PROF")
                                .requestMatchers("api/auth/change+password/**").hasAnyRole("ADMIN","ELEVE","PROF")
                                .requestMatchers("api/eleve/get+all","api/eleve/get+all/**", "api/eleve/get+absences+eleve+by+classe+id/**", "api/eleve/get+absences+eleves").hasRole("ADMIN")//admin
                                .requestMatchers("api/eleve/add", "api/prof/add", "api/parent/add").hasRole("ADMIN")//admin
                                .requestMatchers("api/eleve/update/**", "api/prof/update/**", "api/eleve/get+eleve+by+id/**", "api/prof/get+prof+by+id/**").hasRole("ADMIN")//admin
                                .requestMatchers("api/prof/get+all","api/prof/get+all+class+room/**").hasRole("ADMIN")//admin
                                .requestMatchers("api/examen/get+examen+by+prof/**").hasRole("PROF") // prof
                                .requestMatchers("api/examen/get+examen+inassign/**" , "api/examen/get+examen+inassign+by+prof+id/**").hasRole("PROF") // prof
                                .requestMatchers("api/examen/update+examen/**").hasRole("PROF") // prof
                                .requestMatchers("api/examen/**").hasAnyRole("PROF","ELEVE","ADMIN")

                                .requestMatchers("api/examen_eleve/result/total/**","api/examen_eleve/result/**").permitAll()
                                .requestMatchers("api/examen_eleve/result/total/**","api/examen_eleve/result/**","api/examen_eleve/result/examen+date/**").permitAll()
                                .requestMatchers("api/examen_eleve/examen+prof+without+note/**").hasAnyRole("PROF","ADMIN") // prof admin
                                .requestMatchers("api/examen_eleve/examen+prof+encoure+correction/**","api/examen_eleve/examen+prof+correction+terminer/**","api/examen_eleve/get+exams+by+eleve+prof/**").hasAnyRole("PROF","ADMIN") // prof admin
                                .requestMatchers("api/examen_eleve/delete").hasAnyRole("PROF","ADMIN") // prof
                                .requestMatchers("api/examen_eleve/**").hasAnyRole("PROF","ELEVE","ADMIN") //prof

                                .requestMatchers("api/classeGroup/Prof_eleves/**").hasAnyRole("PROF", "ADMIN") //prof // admin
                                .requestMatchers("api/classeGroup/profs+class/**").hasAnyRole("ADMIN","PROF","ELEVE")
                                .requestMatchers("api/classeGroup/get+class+by+prof+id/**").hasAnyRole("ADMIN","PROF")
                                .requestMatchers("api/classeGroup/save" ,"api/classeGroup/get+all", "api/classeGroup/get+classe+by+prof+id/**").hasAnyRole("PROF","ADMIN")//admin
                                .requestMatchers("api/classeGroup/**").hasAnyRole("PROF", "ADMIN", "ELEVE")//admin
//                              .requestMatchers("api/absence/get+all+by:/**").hasRole("ELEVE")
                                .requestMatchers("api/absence/get+all+by:/**").hasAnyRole("ADMIN","ELEVE","PROF")
                                .requestMatchers("api/absence/get+all+by:/**", "api/absence/insert").hasAnyRole("PROF","ADMIN") // prof admin
                                .requestMatchers("api/absence/**").hasAnyRole("PROF","ELEVE","ADMIN")//prof

                                .requestMatchers("api/classe+prof/assign").hasAnyRole("PROF","ADMIN") //admin
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
