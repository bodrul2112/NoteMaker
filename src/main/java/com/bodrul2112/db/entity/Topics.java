package com.bodrul2112.db.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Topics")
public class Topics
{
	@Id
    @Column(name = "Id", nullable = false)
    private long id;
	
	@Column(name = "Name", nullable = true)
    private String name;
	
	@Column(name = "ParentTopicId", nullable = true)
    private long parentTopicId;
	
	
	public long getId()
	{
		return id;
	}
	
	public String getName()
	{
		return name;
	}
	
	public long getParentTopicId()
	{
		return parentTopicId;
	}
	
	public void setId(long id)
	{
		this.id = id;
	}
	
	public void setName(String name)
	{
		this.name = name;
	}
	
	public void setParentTopicId(long parentTopicId)
	{
		this.parentTopicId = parentTopicId;
	}
	
}
