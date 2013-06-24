package com.bodrul2112.db;

import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import com.bodrul2112.db.dao.NotesDao;
import com.bodrul2112.db.dao.TopicsDao;

public class DatabaseManager
{
	
	public static DatabaseManager INSTANCE = new DatabaseManager();
	
	EntityManagerFactory emf;
	
	public DatabaseManager()
	{
		emf =  Persistence.createEntityManagerFactory("notemaker_unit");
		System.out.println("Loaded DB Manager");
	}
	
	public TopicsDao getTopicsDao()
	{
		return new TopicsDao(emf);
	}
	
	public NotesDao getNotesDao()
	{
		return new NotesDao(emf);
	}
}
