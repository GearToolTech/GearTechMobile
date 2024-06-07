package com.GearTech.geartech.controller;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import com.GearTech.geartech.dto.AlunoDTO;
import com.GearTech.geartech.dto.ResultadosEDHDTO;
import com.GearTech.geartech.dto.ResultadosEDRDTO;
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

import com.GearTech.geartech.entity.ResultadosEDH;
import com.GearTech.geartech.repository.ResultadosEDHRepository;

@RestController
@RequestMapping("/resultadoDentesHelicoidas")
public class ResultadosEDHController {

	@Autowired
	private ResultadosEDHRepository resultadosEDHRepository;

	@GetMapping("/aluno/{numMatricula}")
	public ResponseEntity<List<ResultadosEDHDTO>> findResultadosByAlunoNumMatricula(@PathVariable String numMatricula) {
		List<ResultadosEDH> resultados = resultadosEDHRepository.findByAlunoNumMatricula(numMatricula);

		List<ResultadosEDHDTO> resultadosDTO = resultados.stream()
				.map(resultado -> {
					Aluno aluno = resultado.getAluno(); // Supondo que você tenha um método getAluno() em ResultadosEDR
					AlunoDTO alunoDTO = new AlunoDTO(aluno.getNumMatricula(), aluno.getNome());
					return new ResultadosEDHDTO(
							resultado.getId(),
							resultado.getCirculoPrimitivo1(),
							resultado.getCirculoPrimitivo2(),
							resultado.getModuloNormal(),
							resultado.getPassoNormal(),
							resultado.getPassoHelicoidal(),
							resultado.getDistanciaEntreEixos(),
							alunoDTO
					);
				}).collect(Collectors.toList());

		return ResponseEntity.ok(resultadosDTO);
	}
	
	@GetMapping("/{id}")
	public Optional<ResultadosEDH> findById(@PathVariable Long id) {
		return resultadosEDHRepository.findById(id);
	}
	
	@PostMapping
	public ResultadosEDH createResultadosEDH(@RequestBody ResultadosEDH resultadosEDH) {
		return resultadosEDHRepository.save(resultadosEDH);
	}
	
	@PutMapping("/{id}")
	public ResultadosEDH updateResultadosEDH(@PathVariable Long id, @RequestBody ResultadosEDH resultadosEDH) {
		resultadosEDH.setId(id);
		return resultadosEDHRepository.save(resultadosEDH);
	}
	
	@DeleteMapping("{id}")
	public void deleteResultadosEDH(@PathVariable Long id) {
		resultadosEDHRepository.deleteById(id);
	}
}
