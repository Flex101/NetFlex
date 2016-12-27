clear
echo Building CSS...
sass -C grails-app/assets/stylesheets/style.scss:grails-app/assets/stylesheets/style.css
echo DONE!
echo Building Code...
echo 
./grailsw war ROOT.war -Dgrails.env=production

