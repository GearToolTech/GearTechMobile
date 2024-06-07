package com.GearTech.geartech.config.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Autowired
    private CustomUserDetailsService userDetailsService;

    @Autowired
    SecurityFilter securityFilter;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable())
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .authorizeHttpRequests(authorize -> authorize
                        .requestMatchers(HttpMethod.POST, "/auth/loginAluno").permitAll()
                        .requestMatchers(HttpMethod.POST, "/auth/loginProfessor").permitAll()
                        .requestMatchers(HttpMethod.POST, "/auth/registerAluno").permitAll()
                        .requestMatchers(HttpMethod.POST, "/auth/registerProfessor").permitAll()
                        .requestMatchers(HttpMethod.POST, "/resultadoDentesRetos").permitAll()
                        .requestMatchers(HttpMethod.GET, "/resultadoDentesRetos/aluno/{numMatricula}").permitAll()
                        .requestMatchers(HttpMethod.GET, "/resultadoDentesRetos/professor/{nif}").permitAll()
                        .requestMatchers(HttpMethod.POST, "/resultadoDentesConicos").permitAll()
                        .requestMatchers(HttpMethod.GET, "/resultadoDentesConicos/aluno/{numMatricula}").permitAll()
                        .requestMatchers(HttpMethod.GET, "/resultadoDentesConicos/professor/{nif}").permitAll()
                        .requestMatchers(HttpMethod.POST, "/resultadoDentesHelicoidas").permitAll()
                        .requestMatchers(HttpMethod.GET, "/resultadoDentesHelicoidas/aluno/{numMatricula}").permitAll()
                        .requestMatchers(HttpMethod.GET, "/resultadoDentesHelicoidas/professor/{nif}").permitAll()
                        .requestMatchers(HttpMethod.POST, "/resultadoTransmissoes").permitAll()
                        .requestMatchers(HttpMethod.GET, "/resultadoTransmissoes/aluno/{numMatricula}").permitAll()
                        .requestMatchers(HttpMethod.GET, "/resultadoTransmissoes/professor/{nif}").permitAll()
                        .anyRequest().authenticated()
                )
                .addFilterBefore(securityFilter, UsernamePasswordAuthenticationFilter.class);
        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }
}
