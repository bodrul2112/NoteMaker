package com.bodrul2112.db.dao;

import java.util.List;

import javax.persistence.EntityManagerFactory;

import com.bodrul2112.db.entity.Topics;

public class TopicsDao extends BaseDao
{
    
    public TopicsDao(EntityManagerFactory emf)
	{
		super(emf);
	}
    
    @SuppressWarnings("unchecked")
    public List<Topics> findAllTopics()
    {
        List<Topics> resultList = getEm()
                .createQuery("SELECT um FROM Topics um")
                .getResultList();

        return resultList;
    }
    
    @SuppressWarnings("unchecked")
    public List<Topics> findTopicsWithParent(long parentTopicId)
    {
    	// maybe use criteria in the end - faster, type safe, but slightly less readable
    	List<Topics> resultList = getEm()
    			.createQuery("" +
    					"select " +
    					"  o " +
    					"from " +
    					"  Topics o " +
    					"where " +
    					"  o.parentTopicId = :parentTopicId ")
    					.setParameter("parentTopicId", parentTopicId)
    					.getResultList();
    	
    	return resultList;
    }
    
}
