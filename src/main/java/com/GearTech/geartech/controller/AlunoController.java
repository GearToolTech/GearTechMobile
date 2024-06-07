package com.GearTech.geartech.controller;

import com.GearTech.geartech.entity.Aluno;
import com.GearTech.geartech.repository.AlunoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/aluno")
public class AlunoController {

    @Autowired
    private AlunoRepository alunoRepository;

    @GetMapping("/nome/{nome}")
    public Iterable<Aluno> findByNome(@PathVariable String nome){
        return alunoRepository.findByNome(nome);
    }
    
    @GetMapping
    public ResponseEntity<Long> getAlunoId(Authentication authentication){
        Aluno aluno = (Aluno) authentication.getPrincipal();
        return ResponseEntity.ok(aluno.getNumMatricula());
    }

    @PutMapping("/{id}")
    public Aluno updateAluno(@PathVariable Long numMatricula, @RequestBody Aluno aluno) {
    	aluno.setNumMatricula(numMatricula);
    	return alunoRepository.save(aluno);
    }
    
    @DeleteMapping("{id}")
    public void deleteAluno(@PathVariable Long numMatricula) {
    	alunoRepository.deleteById(numMatricula);
    }
}
