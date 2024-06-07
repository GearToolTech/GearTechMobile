package com.GearTech.geartech.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.GearTech.geartech.entity.Aluno;

import java.util.Optional;

public interface AlunoRepository extends JpaRepository <Aluno, Long> {
	@Query("SELECT a FROM Aluno a WHERE a.nome LIKE :nome")
    Iterable<Aluno> findByNome(String nome);

	Optional<Aluno> findByNumMatricula(Long numMatricula);
}
