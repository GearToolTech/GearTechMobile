package com.GearTech.geartech.config.security;

import com.GearTech.geartech.entity.Aluno;
import com.GearTech.geartech.entity.Professor;
import com.GearTech.geartech.repository.AlunoRepository;
import com.GearTech.geartech.repository.ProfessorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import java.util.ArrayList;

@Component
public class CustomUserDetailsService implements UserDetailsService {
    @Autowired
    private AlunoRepository alunoRepository;
    @Autowired
    private ProfessorRepository professorRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Aluno aluno = this.alunoRepository.findByNumMatricula(Long.valueOf(username)).orElseThrow(() -> new UsernameNotFoundException("User Aluno not found"));
        if(aluno != null){
            return aluno;
        } else {
            Professor professor = this.professorRepository.findByNif(Long.valueOf(username)).orElseThrow(() -> new UsernameNotFoundException("User Professor not found"));
            return new org.springframework.security.core.userdetails.User(String.valueOf(professor.getNif()), professor.getSenha(), new ArrayList<>());
        }
    }
}
