package com.GearTech.geartech.controller;

import com.GearTech.geartech.config.security.TokenService;
import com.GearTech.geartech.dto.*;
import com.GearTech.geartech.entity.Aluno;
import com.GearTech.geartech.entity.Professor;
import com.GearTech.geartech.repository.AlunoRepository;
import com.GearTech.geartech.repository.ProfessorRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/auth")
public class LoginController {

    private final AlunoRepository alunoRepository;
    private final ProfessorRepository professorRepository;
    private final PasswordEncoder passwordEncoder;
    private final TokenService tokenService;

    public LoginController(AlunoRepository alunoRepository, ProfessorRepository professorRepository, PasswordEncoder passwordEncoder, TokenService tokenService) {
        this.alunoRepository = alunoRepository;
        this.professorRepository = professorRepository;
        this.passwordEncoder = passwordEncoder;
        this.tokenService = tokenService;
    }

    @PostMapping("/loginAluno")
    public ResponseEntity loginAluno(@RequestBody LoginRequestAlunoDTO body) {
        Aluno aluno = this.alunoRepository.findByNumMatricula(body.numMatricula()).orElseThrow(() -> new RuntimeException("User not found"));
        if (passwordEncoder.matches(body.senha(), aluno.getSenha())) {
            String token = this.tokenService.generateTokenAluno(aluno);
            return ResponseEntity.ok(new ResponseDTO(aluno.getNome(), token));
        }
        return ResponseEntity.badRequest().build();
    }

    @PostMapping("/loginProfessor")
    public ResponseEntity loginProfessor(@RequestBody LoginRequestProfessorDTO body) {
        Professor professor = this.professorRepository.findByNif(body.nif()).orElseThrow(() -> new RuntimeException("User not found"));
        if (passwordEncoder.matches(body.senha(), professor.getSenha())) {
            String token = this.tokenService.generateTokenProfessor(professor);
            return ResponseEntity.ok(new ResponseDTO(professor.getNome(), token));
        }
        return ResponseEntity.badRequest().build();
    }

    @PostMapping("/registerAluno")
    public ResponseEntity registerAluno(@RequestBody RegisterRequestAlunoDTO body) {
        Optional<Aluno> aluno = this.alunoRepository.findByNumMatricula(body.numMatricula());
        if (aluno.isEmpty()) {
            Aluno newAluno = new Aluno();
            newAluno.setSenha(passwordEncoder.encode(body.senha()));
            newAluno.setNome(body.nome());
            newAluno.setEmail(body.email());
            newAluno.setTurma(body.turma());
            newAluno.setNumMatricula(body.numMatricula());
            this.alunoRepository.save(newAluno);
            String token = this.tokenService.generateTokenAluno(newAluno);
            return ResponseEntity.ok(new ResponseDTO(newAluno.getNome(), token));

        }
        return ResponseEntity.badRequest().build();
    }

    @PostMapping("/registerProfessor")
    public ResponseEntity registerProfessor(@RequestBody RegisterRequestProfessorDTO body) {
        Optional<Professor> professor = this.professorRepository.findByNif(body.nif());
        if (professor.isEmpty()) {
            Professor newProfessor = new Professor();
            newProfessor.setSenha(passwordEncoder.encode(body.senha()));
            newProfessor.setNome(body.nome());
            newProfessor.setEmail(body.email());
            newProfessor.setNif(body.nif());
            this.professorRepository.save(newProfessor);
            String token = this.tokenService.generateTokenProfessor(newProfessor);
            return ResponseEntity.ok(new ResponseDTO(newProfessor.getNome(), token));

        }
        return ResponseEntity.badRequest().build();
    }
}