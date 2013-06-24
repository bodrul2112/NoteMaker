//package com.github.dirkraft.jerseyboot.web;
//
//import java.util.ArrayList;
//import java.util.Arrays;
//import java.util.List;
//import java.util.Map;
//import java.util.TreeMap;
//
//import javax.ws.rs.GET;
//import javax.ws.rs.Path;
//import javax.ws.rs.Produces;
//import javax.ws.rs.QueryParam;
//import javax.ws.rs.core.MediaType;
//
//import com.github.dirkraft.jerseyboot.base.BaseJsonResource;
//
//@Path("/notemaker")
//public class NoteMakerWeb extends BaseJsonResource {
//	
////	@GET
////	@Path("/topic")
////	@Produces(MediaType.APPLICATION_JSON)
////	public Map<String,TreeMap<String,String>> sayHello(@QueryParam("topicId") String name) {
////		
////		Map<String,TreeMap<String,String>> results = new TreeMap<String,TreeMap<String,String>>();
////		TreeMap<String,String> innerResult = new TreeMap<String,String>();
////		innerResult.put("topic", name);
////		results.put("ID",innerResult);
////		
////		return results;
////	}
//
//	@GET
//	@Path("/topic")
//    @Produces(MediaType.APPLICATION_JSON)
//    public Object sayHello(@QueryParam("topicId") String name) {
//		
//		Map<String,Object> results = new TreeMap<String,Object>();
////		TreeMap<String,String> innerResult = new TreeMap<String,String>();
////		innerResult.put("myopic", name);
//		
////		TreeMap<String,String> innerResult2 = new TreeMap<String,String>();
////		innerResult2.put("1", name);
////		innerResult2.put("2", name);
////		innerResult2.put("3", name);
////		innerResult2.put("4", name);
////		innerResult2.put("5", name);
//		
//		List<String> subTopics = new ArrayList<String>();
//		subTopics.add("2");
//		subTopics.add("3");
//		subTopics.add("4");
//		
//		results.put("id","1");
//		results.put("name","main");
//		results.put("subTopics",subTopics);
//		
//        return new Herro();
//    }
//	
//	class Herro {
//		
//		private String yo = "dawg";
//		
//		List<String> subTopics = Arrays.asList(new String[]{});
////		subTopics.add("2");
////		subTopics.add("3");
////		subTopics.add("4");
//		
//		public String getYo()
//		{
//			return yo;
//		}
//		
//		public List<String> getSubTopics()
//		{
//			return subTopics;
//		}
//	}
//	
//	@GET
//	@Path("/notes")
//    @Produces(MediaType.APPLICATION_JSON)
//    public Map<String,String> sayTrap(@QueryParam("topicId") String name) {
//		
//		Map<String,String> results = new TreeMap<String,String>();
//		results.put("ID","ITS A TRAP");
//		
//        return results;
//    }    
//}

package com.github.dirkraft.jerseyboot.web;

import java.util.List;
import java.util.Map;
import java.util.TreeMap;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import com.bodrul2112.db.DatabaseManager;
import com.bodrul2112.db.entity.Notes;
import com.bodrul2112.db.entity.Topics;
import com.github.dirkraft.jerseyboot.base.BaseJsonResource;

@Path("/notes/")
public class NoteMakerWeb extends BaseJsonResource {
	
	public NoteMakerWeb()
	{
	}

	@GET
	@Path("/topics")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Topics> getTopics(@QueryParam("topicId") long topicId) {
		
		DatabaseManager db = DatabaseManager.INSTANCE;
        return db.getTopicsDao().findTopicsWithParent(topicId);
    }
	
	@GET
	@Path("/notes")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Notes> getNotes(@QueryParam("topicId") long topicId) {
		
		DatabaseManager db = DatabaseManager.INSTANCE;
        return db.getNotesDao().findNotesWithParent(topicId);
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