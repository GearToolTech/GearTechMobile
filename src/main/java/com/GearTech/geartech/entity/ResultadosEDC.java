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
@Table(name = "resultado_engrenagem_dentes_conicos")
public class ResultadosEDC {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	public float circuloPrimitivo1;
	public float circuloPrimitivo2;
	public float anguloConeCabe1;
	public float anguloConeCabe2;
	public float anguloPrimitivo1;
	public float anguloPrimitivo2;
	public float anguloEixos;

	@ManyToOne
	@JoinColumn(nullable = true)
	private Aluno aluno;

	@ManyToOne
	@JoinColumn(nullable = true)
	private Professor professor;

	public ResultadosEDC() {
	}

	public ResultadosEDC(Long id, float circuloPrimitivo1, float circuloPrimitivo2, float anguloConeCabe1, float anguloConeCabe2, float anguloPrimitivo1, float anguloPrimitivo2, float anguloEixos, Aluno aluno, Professor professor) {
		this.id = id;
		this.circuloPrimitivo1 = circuloPrimitivo1;
		this.circuloPrimitivo2 = circuloPrimitivo2;
		this.anguloConeCabe1 = anguloConeCabe1;
		this.anguloConeCabe2 = anguloConeCabe2;
		this.anguloPrimitivo1 = anguloPrimitivo1;
		this.anguloPrimitivo2 = anguloPrimitivo2;
		this.anguloEixos = anguloEixos;
		this.aluno = aluno;
		this.professor = professor;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public float getCirculoPrimitivo1() {
		return circuloPrimitivo1;
	}

	public void setCirculoPrimitivo1(float circuloPrimitivo1) {
		this.circuloPrimitivo1 = circuloPrimitivo1;
	}

	public float getCirculoPrimitivo2() {
		return circuloPrimitivo2;
	}

	public void setCirculoPrimitivo2(float circuloPrimitivo2) {
		this.circuloPrimitivo2 = circuloPrimitivo2;
	}

	public float getAnguloConeCabe1() {
		return anguloConeCabe1;
	}

	public void setAnguloConeCabe1(float anguloConeCabe1) {
		this.anguloConeCabe1 = anguloConeCabe1;
	}

	public float getAnguloConeCabe2() {
		return anguloConeCabe2;
	}

	public void setAnguloConeCabe2(float anguloConeCabe2) {
		this.anguloConeCabe2 = anguloConeCabe2;
	}

	public float getAnguloPrimitivo1() {
		return anguloPrimitivo1;
	}

	public void setAnguloPrimitivo1(float anguloPrimitivo1) {
		this.anguloPrimitivo1 = anguloPrimitivo1;
	}

	public float getAnguloPrimitivo2() {
		return anguloPrimitivo2;
	}

	public void setAnguloPrimitivo2(float anguloPrimitivo2) {
		this.anguloPrimitivo2 = anguloPrimitivo2;
	}

	public float getAnguloEixos() {
		return anguloEixos;
	}

	public void setAnguloEixos(float anguloEixos) {
		this.anguloEixos = anguloEixos;
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
		ResultadosEDC that = (ResultadosEDC) o;
		return Float.compare(circuloPrimitivo1, that.circuloPrimitivo1) == 0 && Float.compare(circuloPrimitivo2, that.circuloPrimitivo2) == 0 && Float.compare(anguloConeCabe1, that.anguloConeCabe1) == 0 && Float.compare(anguloConeCabe2, that.anguloConeCabe2) == 0 && Float.compare(anguloPrimitivo1, that.anguloPrimitivo1) == 0 && Float.compare(anguloPrimitivo2, that.anguloPrimitivo2) == 0 && Float.compare(anguloEixos, that.anguloEixos) == 0 && Objects.equals(id, that.id) && Objects.equals(aluno, that.aluno) && Objects.equals(professor, that.professor);
	}

	@Override
	public int hashCode() {
		return Objects.hash(id, circuloPrimitivo1, circuloPrimitivo2, anguloConeCabe1, anguloConeCabe2, anguloPrimitivo1, anguloPrimitivo2, anguloEixos, aluno, professor);
	}

	@Override
	public String toString() {
		return "ResultadosEDC{" +
				"id=" + id +
				", circuloPrimitivo1=" + circuloPrimitivo1 +
				", circuloPrimitivo2=" + circuloPrimitivo2 +
				", anguloConeCabe1=" + anguloConeCabe1 +
				", anguloConeCabe2=" + anguloConeCabe2 +
				", anguloPrimitivo1=" + anguloPrimitivo1 +
				", anguloPrimitivo2=" + anguloPrimitivo2 +
				", anguloEixos=" + anguloEixos +
				", aluno=" + (aluno != null ? aluno.getNome() : "null") +
				", professor=" + (professor != null ? professor.getNome() : "null") +
				'}';
	}
}
