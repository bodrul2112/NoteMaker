package com.bodrul2112.db.dao;

import java.util.List;
import java.util.Map;
import java.util.TreeMap;

import javax.persistence.EntityManager;
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
    public Map<String, Topics> findTopicsWithParent(long parentTopicId)
    {
    	Map<String, Topics> resultMap = new TreeMap<>();
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

    	for(Topics topic : resultList)
    	{
    		resultMap.put(""+topic.getId(), topic);
    	}
    	
    	return resultMap;
    }
    
    @SuppressWarnings("unchecked")
    public Object findTopicsWithId(long id)
    {
    	List<Topics> resultList = getEm()
    			.createQuery("" +
    					"select " +
    					"  o " +
    					"from " +
    					"  Topics o " +
    					"where " +
    					"  o.id = :id ")
    					.setParameter("id", id)
    					.getResultList();
    	
    	return resultList.size()>0 ? resultList.get(0) : new String[]{};
    }
    
    public void addTopic(Topics topic)
	{
    	EntityManager em = getEm();
    	em.getTransaction().begin();
    	em.persist(topic);
    	em.getTransaction().commit();
	}
    
}
