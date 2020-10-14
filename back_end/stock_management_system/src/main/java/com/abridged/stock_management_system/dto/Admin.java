package com.abridged.stock_management_system.dto;

import java.io.Serializable;

import javax.persistence.Column;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonRootName;

import lombok.Data;

/**
 * This is Admin Entity Class
 * 
 * @author Manasi Sutar
 */
@Data
@Entity
@Table(name = "admin")
@JsonRootName("Admin")
@JsonInclude(content = Include.NON_NULL)
public class Admin implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@Column
	private String username;

	@Column
	private String password;
}
