package com.github.dirkraft.jerseyboot.web;

import java.util.Date;
import java.util.Map;
import java.util.TreeMap;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.bodrul2112.db.DatabaseManager;
import com.bodrul2112.db.entity.Notes;
import com.bodrul2112.db.entity.Topics;
import com.github.dirkraft.jerseyboot.base.BaseJsonResource;

@Path("/nm/")
public class NoteMakerWeb extends BaseJsonResource {
	
	public NoteMakerWeb()
	{
	}
	
	@GET
	@Path("/topic")
    @Produces(MediaType.APPLICATION_JSON)
    public Object getTopicWithId(@QueryParam("topicId") long topicId) {
		
		DatabaseManager db = DatabaseManager.INSTANCE;
        return db.getTopicsDao().findTopicsWithId(topicId);
    }
	
	@GET
	@Path("/subtopics")
    @Produces(MediaType.APPLICATION_JSON)
    public Map<String,Topics> getSubtopicsWithParentId(@QueryParam("parentId") long parentId) {
		
		DatabaseManager db = DatabaseManager.INSTANCE;
        return db.getTopicsDao().findTopicsWithParent(parentId);
    }
	
	@POST
	@Path("/newsubtopic")
	@Consumes({"application/xml", "application/json"})
	@Produces({"application/xml", "application/json"})
	public Response  setSomeProps(Map<String,String> postData) 
	{
		String result = "new subtopic created";
		
		Topics topic = new Topics();
		
		String[] expectedParams = new String[]{"name","parentTopicId"};
		
		for(String key : expectedParams)
		{
			if(postData.get(key) == null || postData.get(key).equals(""))
			{
				throw new RuntimeException("sad times");
			}
		}
		
		topic.setName(postData.get("name"));
		topic.setParentTopicId(Integer.parseInt(postData.get("parentTopicId")));
		
		DatabaseManager.INSTANCE.getTopicsDao().addTopic(topic);
		
		return Response.status(200).entity(result).build();
    }
	
	@POST
	@Path("/newnote")
	@Consumes({"application/xml", "application/json"})
	@Produces({"application/xml", "application/json"})
	public Response  addNewNote(Map<String,String> postData) 
	{
		String result = "new note created";
		
		Notes note = new Notes();
		
		String[] expectedParams = new String[]{"name","parentTopicId"};
		
		for(String key : expectedParams)
		{
			if(postData.get(key) == null || postData.get(key).equals(""))
			{
				throw new RuntimeException("sad times with this new notw");
			}
		}
		
		note.setName(postData.get("name"));
		note.setParentTopicId(Integer.parseInt(postData.get("parentTopicId")));
		note.setTimeCreated(new Date(System.currentTimeMillis()));
		
		DatabaseManager.INSTANCE.getNotesDao().addNote(note);
		
		return Response.status(200).entity(result).build();
    }
	
	@POST
	@Path("/updatenote")
	@Consumes({"application/xml", "application/json"})
	@Produces({"application/xml", "application/json"})
	public Response  updateNotes(Map<String,String> postData) 
	{
		String result = "updated note";
		
		DatabaseManager.INSTANCE.getNotesDao().updateNote(postData);
		
		return Response.status(200).entity(result).build();
	}

	@GET
	@Path("/singlenote")
    @Produces(MediaType.APPLICATION_JSON)
    public Object getSingleNoteWithId(@QueryParam("noteId") long  topicId) {
		
		DatabaseManager db = DatabaseManager.INSTANCE;
        return db.getNotesDao().findNoteWithId(topicId);
    }
	
	@GET
	@Path("/notes")
    @Produces(MediaType.APPLICATION_JSON)
    public Map<String,Notes> getNotesWithParentId(@QueryParam("parentId") long parentId) {
		
		DatabaseManager db = DatabaseManager.INSTANCE;
        return db.getNotesDao().findNotesWithParent(parentId);
    }
	
	@GET
	@Path("/query")
    @Produces(MediaType.APPLICATION_JSON)
    public Map<String,String> sayHello(@QueryParam("name") String name) {
		
		Map<String,String> results = new TreeMap<String,String>();
		results.put("ID",name);
		
        return results;
    }
	
	
	@GET
	@Path("/trap")
    @Produces(MediaType.APPLICATION_JSON)
    public Map<String,String> sayTrap(@QueryParam("name") String name) {
		
		Map<String,String> results = new TreeMap<String,String>();
		results.put("ID","ITS A TRAP");
		
        return results;
    }    
}