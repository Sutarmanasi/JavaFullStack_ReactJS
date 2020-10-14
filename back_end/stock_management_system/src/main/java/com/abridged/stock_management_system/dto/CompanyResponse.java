package com.abridged.stock_management_system.dto;

import java.io.Serializable;
import java.util.List;

import lombok.Data;

/**
 * This is CompanyResponse Class
 * 
 * @author Manasi Sutar
 */
@Data
public class CompanyResponse implements Serializable {

	private static final long serialVersionUID = 1L;

	private int statusCode;
	private String message;
	private String companyIdMessage;
	private String companyNameMessage;
	private String managerNameMessage;
	private String managerIdMessage;
	private String emailMessage;
	private String mobileNoMessage;
	private String passwordMessage;
	private List<Company> companyList;
	private Company company;
	private List<Manager> managerList;
	private Manager manager;
}
