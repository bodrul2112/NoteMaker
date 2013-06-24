package com.bodrul2112.db.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Notes")
public class Notes
{
	@Id
    @Column(name = "Id", nullable = false)
    private long id;
	
	@Column(name = "Name", nullable = true)
    private String name;
	
	@Column(name = "TimeCreated", nullable = true)
    private Date timeCreated;
	
	@Column(name = "TimeLastUpdated", nullable = true)
    private Date timeLastUpdated;
	
	@Column(name = "ParentTopicId", nullable = false)
    private long parentTopicId;
	
	@Column(name = "HashTags", nullable = true)
    private String hashTags;
	
	@Column(name = "SpecialHashTags", nullable = true)
    private String specialHashTags;

	public long getId()
	{
		return id;
	}

	public void setId(long id)
	{
		this.id = id;
	}

	public String getName()
	{
		return name;
	}

	public void setName(String name)
	{
		this.name = name;
	}

	public Date getTimeCreated()
	{
		return timeCreated;
	}

	public void setTimeCreated(Date timeCreated)
	{
		this.timeCreated = timeCreated;
	}

	public Date getTimeLastUpdated()
	{
		return timeLastUpdated;
	}

	public void setTimeLastUpdated(Date timeLastUpdated)
	{
		this.timeLastUpdated = timeLastUpdated;
	}

	public long getParentTopicId()
	{
		return parentTopicId;
	}

	public void setParentTopicId(long parentTopicId)
	{
		this.parentTopicId = parentTopicId;
	}

	public String getHashTags()
	{
		return hashTags;
	}

	public void setHashTags(String hashTags)
	{
		this.hashTags = hashTags;
	}

	public String getSpecialHashTags()
	{
		return specialHashTags;
	}

	public void setSpecialHashTags(String specialHashTags)
	{
		this.specialHashTags = specialHashTags;
	}
}
