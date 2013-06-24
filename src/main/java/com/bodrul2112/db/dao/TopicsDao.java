package com.bodrul2112.db.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;

import com.bodrul2112.db.entity.Topics;


public class TopicsDao
{
	private final EntityManagerFactory emf;
    private final ThreadLocal<EntityManager> emThreadLocal = new ThreadLocal<EntityManager>();
    
    public TopicsDao(EntityManagerFactory emf)
	{
		this.emf = emf;
	}
    
    @SuppressWarnings("unchecked")
    public List<Topics> findAll()
    {
        List<Topics> resultList = getEm()
                .createQuery("SELECT um FROM Topics um")
                .getResultList();

        return resultList;
    }
    
    
    private EntityManager getEm()
    {
        // TODO: is this a good approach ?
        EntityManager em = emThreadLocal.get();

        if (em == null)
        {
            em = emf.createEntityManager();
            emThreadLocal.set(em);
        }

        return em;
    }
    
}
