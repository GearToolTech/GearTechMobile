package com.GearTech.geartech.controller;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import com.GearTech.geartech.dto.AlunoDTO;
import com.GearTech.geartech.dto.ProfessorDTO;
import com.GearTech.geartech.dto.ResultadosEDRDTO;
import com.GearTech.geartech.entity.Aluno;
import com.GearTech.geartech.entity.Professor;
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

import com.GearTech.geartech.entity.ResultadosEDR;
import com.GearTech.geartech.repository.ResultadosEDRRepository;

@RestController
@RequestMapping("/resultadoDentesRetos")
public class ResultadosEDRControler {
	
	@Autowired
	private ResultadosEDRRepository resultadosEDRRepository;
	
	@GetMapping
	public Iterable<ResultadosEDR> findIAll(){
		return resultadosEDRRepository.findAll();
	}

	@GetMapping("/aluno/{numMatricula}")
	public ResponseEntity<List<ResultadosEDRDTO>> findResultadosByAluno(@PathVariable String numMatricula) {
		List<ResultadosEDR> resultados = resultadosEDRRepository.findByAlunoNumMatricula(numMatricula);

		// Converta para DTO
		List<ResultadosEDRDTO> resultadosDTO = resultados.stream()
				.map(resultado -> {
					Aluno aluno = resultado.getAluno(); // Supondo que você tenha um método getAluno() em ResultadosEDR
					AlunoDTO alunoDTO = new AlunoDTO(aluno.getNumMatricula(), aluno.getNome());
					return new ResultadosEDRDTO(
							resultado.getId(),
							resultado.getCirculoPrimitivo1(),
							resultado.getPasso(),
							resultado.getFolgaCabeca(),
							resultado.getAlturaCabecaDente(),
							resultado.getAlturaPeDente(),
							resultado.getAlturaDente(),
							resultado.getCirculoCabeca(),
							resultado.getCirculoPe(),
							resultado.getDistanciaEixos(),
							resultado.getCirculoCabecaInterno(),
							resultado.getCirculoPeInterno(),
							resultado.getCirculoPrimitivo2(),
							resultado.getDistanciaEixosInterno(),
							alunoDTO
					);
				})
				.collect(Collectors.toList());

		return ResponseEntity.ok(resultadosDTO);
	}

	@GetMapping("/professor/{nif}")
	public ResponseEntity<List<ResultadosEDRDTO>> findResultadosByProfessor(@PathVariable String nif) {
		List<ResultadosEDR> resultados = resultadosEDRRepository.findByProfessorNif(nif);

		// Converta para DTO
		List<ResultadosEDRDTO> resultadosDTO = resultados.stream()
				.map(resultado -> {
					Professor professor = resultado.getProfessor(); // Supondo que você tenha um método getAluno() em ResultadosEDR
					ProfessorDTO professorDTO = new ProfessorDTO(professor.getNif(), professor.getNome());
					return new ResultadosEDRDTO(
							resultado.getId(),
							resultado.getCirculoPrimitivo1(),
							resultado.getPasso(),
							resultado.getFolgaCabeca(),
							resultado.getAlturaCabecaDente(),
							resultado.getAlturaPeDente(),
							resultado.getAlturaDente(),
							resultado.getCirculoCabeca(),
							resultado.getCirculoPe(),
							resultado.getDistanciaEixos(),
							resultado.getCirculoCabecaInterno(),
							resultado.getCirculoPeInterno(),
							resultado.getCirculoPrimitivo2(),
							resultado.getDistanciaEixosInterno(),
							professorDTO
					);
				})
				.collect(Collectors.toList());

		return ResponseEntity.ok(resultadosDTO);
	}


	@PostMapping
	public ResultadosEDR createResultadosEDR(@RequestBody ResultadosEDR resultadosEDR) {
		return resultadosEDRRepository.save(resultadosEDR);
	}
	
	@PutMapping("/{id}")
	public ResultadosEDR updateResultadosEDR(@PathVariable Long id, @RequestBody ResultadosEDR resultadosEDR) {
		resultadosEDR.setId(id);
		return resultadosEDRRepository.save(resultadosEDR);
	}
	
	@DeleteMapping("{id}")
	public void deleteResultadosEDR(@PathVariable Long id) {
		resultadosEDRRepository.deleteById(id);
	}
}
