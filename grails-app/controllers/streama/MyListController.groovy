package streama

import grails.converters.JSON
import static org.springframework.http.HttpStatus.*

class MyListController {

	def springSecurityService	
	
	def listGroups(){
	def myGroups = TvShow.withCriteria{
      ne("deleted", true)
      isNotEmpty("episodes")
    }

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
