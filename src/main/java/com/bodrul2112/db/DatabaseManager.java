package com.bodrul2112.db;

import java.util.List;

import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import com.bodrul2112.db.dao.TopicsDao;
import com.bodrul2112.db.entity.Topics;

public class DatabaseManager
{
	public DatabaseManager()
	{
		//EntityMan
	}
	
	public static void main(String[] args)
	{
		EntityManagerFactory emf =  Persistence.createEntityManagerFactory("notemaker_unit");
		
		TopicsDao doa = new TopicsDao(emf);
		
		List<Topics> result = doa.findAll();
		
		for(Topics topic : result)
		{
			System.out.println(topic.getName());
		}
	}
}
