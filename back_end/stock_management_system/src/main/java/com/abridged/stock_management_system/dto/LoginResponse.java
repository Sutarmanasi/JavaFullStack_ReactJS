package com.abridged.stock_management_system.dto;

import java.io.Serializable;

import lombok.Data;

/**
 * This is LoginResponse Class
 * 
 * @author Manasi Sutar
 */
@Data
public class LoginResponse implements Serializable {

	private static final long serialVersionUID = 1L;

	private int statusCode;
	private String message;
	private String usernameMessage;
	private String passwordMessage;
	private String idMessage;
	private String mobileNoMessage;
	private Manager manager;
	private Investor investor;
}
