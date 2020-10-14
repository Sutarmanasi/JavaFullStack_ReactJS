package com.abridged.stock_management_system.dto;

import java.io.Serializable;

import javax.persistence.Column;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonRootName;

import lombok.Data;

/**
 * This is Manager Entity Class
 * 
 * @author Manasi Sutar
 */

@Data
@Entity
@Table(name = "manager")
@JsonRootName("Manager")
@JsonInclude(content = Include.NON_NULL)
public class Manager implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@Column
	@NotNull
	private String managerId;

	@Column
	private String managerName;

	@Column
	private String companyId;

	@Column
	private String companyName;

	@Column
	private String email;

	@Column
	private String password;

	@Column
	private String mobileNo;
}
