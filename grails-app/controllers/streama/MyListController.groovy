package streama

import grails.converters.JSON
import static org.springframework.http.HttpStatus.*

class MyListController {

	static responseFormats = ['json', 'xml']
  static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]

	def springSecurityService	
	
	def addGroup(ListGroup groupInstance){
		if (groupInstance == null) {
      render status: NOT_FOUND
      return
    }
    
    groupInstance.save flush: true
    respond groupInstance, [status: CREATED]
	}
	
	def listGroups(){
	def myGroups;

    myGroups = myGroups.findAll{ listGroup->
      return myGroups.hasFiles
    }

    JSON.use ('myListListItem') {
      respond myGroups
    }
	}
		
  def listMyList(){
	def myList = TvShow.withCriteria{
      ne("deleted", true)
      isNotEmpty("episodes")
    }

    myList = myList.findAll{ listItem->
      return myList.hasFiles
    }

    JSON.use ('myListListItem') {
      respond myList
    }
  }
}
