package com.bodrul2112.db.dao;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;

public class BaseDao
{
	private final ThreadLocal<EntityManager> emThreadLocal = new ThreadLocal<EntityManager>();
	private final EntityManagerFactory emf;
	
	public BaseDao(EntityManagerFactory emf)
	{
		this.emf = emf;
	}

	protected EntityManager getEm()
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
