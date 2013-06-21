package com.github.dirkraft.jerseyboot.web;

import java.util.Map;
import java.util.TreeMap;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import com.github.dirkraft.jerseyboot.base.BaseJsonResource;

@Path("/notes")
public class NotesWeb extends BaseJsonResource {

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