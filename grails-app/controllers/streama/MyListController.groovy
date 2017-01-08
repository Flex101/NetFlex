package streama

import grails.converters.JSON
import static org.springframework.http.HttpStatus.*

class MyListController {

	static responseFormats = ['json', 'xml']
  static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]

	def springSecurityService	
	
	@Transactional
	def addGroup(ListGroup groupInstance){
		if (groupInstance == null) {
      render status: NOT_FOUND
      return
    }
    
    groupInstance.save flush: true
    respond groupInstance, [status: CREATED]
	}
	
	@Transactional
	def deleteGroup(ListGroup groupInstance){
		if (groupInstance == null) {
      render status: NOT_FOUND
      return
    }
    
    groupInstance.deleted = true
    groupInstance.save failOnError: true, flush: true
    render status: NO_CONTENT
	}
	
	def listGroups(){
	def myGroups = ListGroup.withCriteria{
		ne("deleted", true)
		}

    JSON.use ('myListGroup') {
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
