package com.GearTech.geartech.controller;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import com.GearTech.geartech.dto.AlunoDTO;
import com.GearTech.geartech.dto.ResultadosTDTO;
import com.GearTech.geartech.entity.Aluno;
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

import com.GearTech.geartech.entity.ResultadosT;
import com.GearTech.geartech.repository.ResultadosTRepository;

@RestController
@RequestMapping("/resultadoTransmissoes")
public class ResultadosTController {

	@Autowired
	private ResultadosTRepository resultadosTRepository;
	
	@GetMapping
	public Iterable<ResultadosT> findIAll(){
		return resultadosTRepository.findAll();
	}

	@GetMapping("/aluno/{numMatricula}")
	public ResponseEntity<List<ResultadosTDTO>> findResultadosByAlunoNumMatricula(@PathVariable String numMatricula) {
		List<ResultadosT> resultados = resultadosTRepository.findByAlunoNumMatricula(numMatricula);

		List<ResultadosTDTO> resultadosDTO = resultados.stream()
				.map(resultado -> {
					Aluno aluno = resultado.getAluno(); // Supondo que você tenha um método getAluno() em ResultadosEDR
					AlunoDTO alunoDTO = new AlunoDTO(aluno.getNumMatricula(), aluno.getNome());
					return new ResultadosTDTO(
							resultado.getId(),
							resultado.getiTotal(),
							resultado.getiIndividuais(),
							alunoDTO
					);
				})
				.collect(Collectors.toList());

		return ResponseEntity.ok(resultadosDTO);
	}
	
	@PostMapping
	public ResultadosT createResultadosT(@RequestBody ResultadosT resultadosT) {
		return resultadosTRepository.save(resultadosT);
	}
	
	@PutMapping("/{id}")
	public ResultadosT updateResultadosT(@PathVariable Long id, @RequestBody ResultadosT resultadosT) {
		resultadosT.setId(id);
		return resultadosTRepository.save(resultadosT);
	}
	
	@DeleteMapping("{id}")
	public void deleteResultadosT(@PathVariable Long id) {
		resultadosTRepository.deleteById(id);
	}
}
