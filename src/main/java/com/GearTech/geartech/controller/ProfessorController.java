package com.GearTech.geartech.controller;

import com.GearTech.geartech.entity.Professor;
import com.GearTech.geartech.repository.ProfessorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/professor")
public class ProfessorController {
	
	@Autowired
	private ProfessorRepository professorRepository;

    @GetMapping("/nome/{nome}")
    public Iterable<Professor> findByNome(@PathVariable String nome){
        return professorRepository.findByNome(nome);
    }

    @GetMapping
    public ResponseEntity<Long> getProfessorId(Authentication authentication){
        Professor professor = (Professor) authentication.getPrincipal();
        return ResponseEntity.ok(professor.getNif());
    }

    @PutMapping("/{id}")
    public Professor updateProfessor(@PathVariable Long nif, @RequestBody Professor professor) {
    	professor.setNif(nif);
    	return professorRepository.save(professor);
    }
    
    @DeleteMapping("{id}")
    public void deleteProfessor(@PathVariable Long nif) {
    	professorRepository.deleteById(nif);
    }
}
