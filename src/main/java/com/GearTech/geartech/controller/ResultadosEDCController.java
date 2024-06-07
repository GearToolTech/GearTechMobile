package com.GearTech.geartech.controller;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import com.GearTech.geartech.dto.AlunoDTO;
import com.GearTech.geartech.dto.ProfessorDTO;
import com.GearTech.geartech.dto.ResultadosEDCDTO;
import com.GearTech.geartech.entity.Aluno;
import com.GearTech.geartech.entity.Professor;
import com.GearTech.geartech.entity.ResultadosEDR;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.GearTech.geartech.entity.ResultadosEDC;
import com.GearTech.geartech.repository.ResultadosEDCRepository;

@RestController
@RequestMapping("/resultadoDentesConicos")
public class ResultadosEDCController {

	@Autowired
	private ResultadosEDCRepository resultadosEDCRepository;
	
	@GetMapping
	public Iterable<ResultadosEDC> findIAll(){
		return resultadosEDCRepository.findAll();
	}

	@GetMapping("/aluno/{numMatricula}")
	public ResponseEntity<List<ResultadosEDCDTO>> findResultadosByAluno(@PathVariable String numMatricula) {
		List<ResultadosEDC> resultados = resultadosEDCRepository.findByAlunoNumMatricula(numMatricula);

		List<ResultadosEDCDTO> resultadosDTO = resultados.stream().map(resultado -> {
			Aluno aluno = resultado.getAluno(); // Supondo que você tenha um método getAluno() em ResultadosEDR
			AlunoDTO alunoDTO = new AlunoDTO(aluno.getNumMatricula(), aluno.getNome());
			return new ResultadosEDCDTO(
					resultado.getId(),
					resultado.getCirculoPrimitivo1(),
					resultado.getCirculoPrimitivo2(),
					resultado.getAnguloConeCabe1(),
					resultado.getAnguloConeCabe2(),
					resultado.getAnguloPrimitivo1(),
					resultado.getAnguloPrimitivo2(),
					resultado.getAnguloEixos(),
					alunoDTO
			);
		}).collect(Collectors.toList());

		return ResponseEntity.ok(resultadosDTO);
	}

	@GetMapping("/professor/{nif}")
	public ResponseEntity<List<ResultadosEDCDTO>> findResultadosByProfessor(@PathVariable String nif) {
		List<ResultadosEDC> resultados = resultadosEDCRepository.findByProfessorNif(nif);

		List<ResultadosEDCDTO> resultadosDTO = resultados.stream().map(resultado -> {
			Professor professor = resultado.getProfessor(); // Supondo que você tenha um método getAluno() em ResultadosEDR
			ProfessorDTO professorDTO = new ProfessorDTO(professor.getNif(), professor.getNome());
			return new ResultadosEDCDTO(
					resultado.getId(),
					resultado.getCirculoPrimitivo1(),
					resultado.getCirculoPrimitivo2(),
					resultado.getAnguloConeCabe1(),
					resultado.getAnguloConeCabe2(),
					resultado.getAnguloPrimitivo1(),
					resultado.getAnguloPrimitivo2(),
					resultado.getAnguloEixos(),
					professorDTO
			);
		}).collect(Collectors.toList());

		return ResponseEntity.ok(resultadosDTO);
	}
	
	@PostMapping
	public ResultadosEDC createResultadosEDR(@RequestBody ResultadosEDC resultadosEDC) {
		return resultadosEDCRepository.save(resultadosEDC);
	}
	
	@PutMapping("/{id}")
	public ResultadosEDC updateResultadosEDR(@PathVariable Long id, @RequestBody ResultadosEDC resultadosEDC) {
		resultadosEDC.setId(id);
		return resultadosEDCRepository.save(resultadosEDC);
	}
	
	@DeleteMapping("{id}")
	public void deleteResultadosEDR(@PathVariable Long id) {
		resultadosEDCRepository.deleteById(id);
	}
}
