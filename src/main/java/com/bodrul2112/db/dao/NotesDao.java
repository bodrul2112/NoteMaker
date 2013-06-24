package com.bodrul2112.db.dao;

import java.util.List;

import javax.persistence.EntityManagerFactory;

import com.bodrul2112.db.entity.Notes;

public class NotesDao extends BaseDao
{
	public NotesDao(EntityManagerFactory emf)
	{
		super(emf);
	}
	
	@SuppressWarnings("unchecked")
    public List<Notes> findNotesWithParent(long parentTopicId)
    {
    	// maybe use criteria in the end - faster, type safe, but slightly less readable
    	List<Notes> resultList = getEm()
    			.createQuery("" +
    					"select " +
    					"  o " +
    					"from " +
    					"  Notes o " +
    					"where " +
    					"  o.parentTopicId = :parentTopicId ")
    					.setParameter("parentTopicId", parentTopicId)
    					.getResultList();
    	
    	return resultList;
    }
}
