package com.GearTech.geartech.entity;

import java.util.Objects;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "resultado_transmissoes")
public class ResultadosT {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private float iTotal;
	private float iIndividuais;

	@ManyToOne
	@JoinColumn(nullable = true)
	private Aluno aluno;

	@ManyToOne
	@JoinColumn(nullable = true)
	private Professor professor;

	public ResultadosT() {
	}

	public ResultadosT(Long id, float iTotal, float iIndividuais, Aluno aluno, Professor professor) {
		this.id = id;
		this.iTotal = iTotal;
		this.iIndividuais = iIndividuais;
		this.aluno = aluno;
		this.professor = professor;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public float getiTotal() {
		return iTotal;
	}

	public void setiTotal(float iTotal) {
		this.iTotal = iTotal;
	}

	public float getiIndividuais() {
		return iIndividuais;
	}

	public void setiIndividuais(float iIndividuais) {
		this.iIndividuais = iIndividuais;
	}

	public Aluno getAluno() {
		return aluno;
	}

	public void setAluno(Aluno aluno) {
		this.aluno = aluno;
	}

	public Professor getProfessor() {
		return professor;
	}

	public void setProfessor(Professor professor) {
		this.professor = professor;
	}

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		ResultadosT that = (ResultadosT) o;
		return Float.compare(iTotal, that.iTotal) == 0 && Float.compare(iIndividuais, that.iIndividuais) == 0 && Objects.equals(id, that.id) && Objects.equals(aluno, that.aluno) && Objects.equals(professor, that.professor);
	}

	@Override
	public int hashCode() {
		return Objects.hash(id, iTotal, iIndividuais, aluno, professor);
	}

	@Override
	public String toString() {
		return "ResultadosT{" +
				"id=" + id +
				", iTotal=" + iTotal +
				", iIndividuais=" + iIndividuais +
				", aluno=" + (aluno != null ? aluno.getNome() : "null") +
				", professor=" + (professor != null ? professor.getNome() : "null") +
				'}';
	}
}
