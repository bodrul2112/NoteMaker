package com.bodrul2112.db.dao;

import java.util.List;
import java.util.Map;
import java.util.TreeMap;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;

import com.bodrul2112.db.entity.Notes;

public class NotesDao extends BaseDao
{
	public NotesDao(EntityManagerFactory emf)
	{
		super(emf);
	}
	
	@SuppressWarnings("unchecked")
    public Map<String,Notes> findNotesWithParent(long parentTopicId)
    {
		Map<String,Notes> resultMap = new TreeMap<String,Notes>();
		
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
    	
    	
    	
    	for(Notes note : resultList)
    	{
    		note.setContent("");
    		resultMap.put(""+note.getId(), note);
    	}
    	
    	return resultMap;
    }
	
	@SuppressWarnings("unchecked")
    public Object findNoteWithId(long noteId)
    {
    	List<Notes> resultList = getEm()
    			.createQuery("" +
    					"select " +
    					"  o " +
    					"from " +
    					"  Notes o " +
    					"where " +
    					"  o.id = :noteId ")
    					.setParameter("noteId", noteId)
    					.getResultList();
    	
    	return resultList.size()>0 ? resultList.get(0) : new String[]{};
    }

	public void updateNote(Map<String, String> postData)
	{
		// TODO Auto-generated method stub
		Notes note = (Notes) findNoteWithId(Integer.parseInt(postData.get("id")));
		note.setContent(postData.get("content"));
		
		EntityManager em = getEm();
    	em.getTransaction().begin();
    	em.persist(note);
    	em.getTransaction().commit();
		
	}

	public void addNote(Notes note)
	{
		EntityManager em = getEm();
    	em.getTransaction().begin();
    	em.persist(note);
    	em.getTransaction().commit();
	}
	
	
}
