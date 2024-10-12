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
                                .requestMatchers("/api/auth/get+person/**").permitAll() // all roles
                                .requestMatchers("api/auth/change+password/**", "api/eleve/get+eleve+by+id/**").permitAll()
                                .requestMatchers("api/eleve/get+all","api/eleve/get+all/**", "api/eleve/get+absences+eleve+by+classe+id/**", "api/eleve/get+absences+eleves").permitAll()//admin
                                .requestMatchers("api/eleve/add", "api/prof/add", "api/parent/add").permitAll()//admin
                                .requestMatchers("api/eleve/update/**", "api/prof/update/**", "api/eleve/get+eleve+by+id/**", "api/prof/get+prof+by+id/**").permitAll()//admin
                                .requestMatchers("api/prof/get+all","api/prof/get+all+class+room/**").permitAll()//admin
                                .requestMatchers("api/examen/get+examen+by+prof/**").permitAll() // prof
                                .requestMatchers("api/examen/get+examen+inassign/**" , "api/examen/get+examen+inassign+by+prof+id/**").permitAll() // prof
                                .requestMatchers("api/examen/update+examen/**").permitAll() // prof
                                .requestMatchers("api/examen/**").permitAll()

                                .requestMatchers("api/examen_eleve/result/total/**","api/examen_eleve/result/**","api/examen_eleve/result/examen+date/**").permitAll()
                                .requestMatchers("api/examen_eleve/examen+prof+without+note/**").permitAll() // prof admin
                                .requestMatchers("api/examen_eleve/examen+prof+encoure+correction/**","api/examen_eleve/examen+prof+correction+terminer/**","api/examen_eleve/get+exams+by+eleve+prof/**").permitAll() // prof admin
                                .requestMatchers("/api/examen_eleve/delete").permitAll() // prof
                                .requestMatchers("api/examen_eleve/**").permitAll() //prof

                                .requestMatchers("api/classe_group/prof-eleves/**").permitAll() //prof // admin
                                .requestMatchers("api/classe_group/profs-class/**","api/classe_group/get-class-by-prof-id/**").permitAll()
                                .requestMatchers("api/classe_group/save" ,"api/classe_group/get-all", "api/classe_group/get-classe-by-prof-id/**").permitAll()//admin
                                .requestMatchers("api/classe_group/**").permitAll()//admin
//                              .requestMatchers("api/absence/get+all+by:/**").hasRole("ELEVE")
                                .requestMatchers("api/absence/get+all+by:/**", "api/absence/insert").permitAll() // prof admin
                                .requestMatchers("api/absence/**").permitAll()//prof

                                .requestMatchers("api/classe+prof/assign").permitAll() //admin
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
