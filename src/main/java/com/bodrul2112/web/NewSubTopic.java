package com.bodrul2112.web;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name = "newsubtopic")
public class NewSubTopic 
{

	@XmlElement(name = "name")
	private String name;
	
	public String getName()
	{
		return name;
	}
	
}