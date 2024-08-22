package com.CO_SCHOOL.config;
import com.CO_SCHOOL.services.PersonDetailsImp;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

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
                                .requestMatchers("api/eleve/add", "api/prof/add", "api/parent/add").hasRole("ADMIN")
                                .requestMatchers("api/examen/**").hasRole("PROF")
                                .requestMatchers("api/examen_eleve/**").hasRole("PROF")
                                .anyRequest().authenticated()
                )
                .formLogin(AbstractHttpConfigurer::disable);

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
