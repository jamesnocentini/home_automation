# Dean's Remote Switch Web server to Arduino Bluetooth Clients
# The Server simply controls the local bluetooth port for communication
# in Serial form to Bluetooth Receivers
#
# This is an Alpha Prototype - Rev. 1 last modified 02/10/2012
# Copyright 2012 Fei Manheche
# http://robobo.org
import cgi
import time 
import struct

#-------------------------------------------------------------------------------
#  user config
#-------------------------------------------------------------------------------


verbose=True
debug=True

bluetoothlib='bluetooth'
#bluetoothlib='serial'
if bluetoothlib=='bluetooth':
  plug1 = "00:12:08:10:06:22"
  plug2 = "00:12:08:17:13:65"
else :
  # when using 'serial' library use com ports. Note: outgoing (with 'Dev B')
  plug1 = "com11"
  plug2 = "com12"
  

#///////////////////////////////////////////////////////////////////////////////
if bluetoothlib=='bluetooth': 
  from bluetooth import *  
else:
  import serial
  
#////////////////////////////////////////////////////////////////////////////////

#>>>>>>>>>>>>>>>>>>Initialize The Connections>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
print "Attempting to now establish a connection with the client devices... \n"
if bluetoothlib=='bluetooth': 

  try:
	  port=1
	  ser1=BluetoothSocket( RFCOMM )
	  ser1.connect((plug1, port))    # node 1
	  ser1.settimeout(0)
	  print "\n connected Bluetooth Client 1"
  except Exception: 
          print "Ooops! \n Unable to connect to Bluetooth Client 1"
	  pass

  try:
	  port=1
	  ser2=BluetoothSocket( RFCOMM )
	  ser2.connect((plug2, port))    # node 2
	  ser2.settimeout(0)
	  print "\n connected Bluetooth Client 2"
  except Exception: 
          print "Ooops! \n Unable to connect to Bluetooth Client 2"
	  pass

else :
 
  ser1 = serial.Serial()
  ser1.baudrate=9600
  ser1.timeout=0
  ser1.port=plug1  
  ser1.open()
  print "connected RCX 1"
  
  ser2 = serial.Serial()
  ser2.timeout=0
  ser2.baudrate=9600
  ser2.port=plug2   
  ser2.open() # initializes bluetooth master (me) to slave (nxt) connection
  print "connected RCX 2"

#>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

print "\nAll possible clients have been connected and the webserver is now running"
print "\n If there are any 'KNOWN' unconnected clients you may try restarting the server to fix"

from BaseHTTPServer import HTTPServer
from SimpleHTTPServer import SimpleHTTPRequestHandler

# The web server.
class MyHandler(SimpleHTTPRequestHandler):
  def do_POST(self):
    if self.path == '/arduino':
      form = cgi.FieldStorage(fp=self.rfile, headers=self.headers,
        environ={'REQUEST_METHOD':'POST'})
      code = form['code'].value
      print 'Sent:', code
      if code == 'a':
	ser1.send('a')
      elif code == 'g':
	ser1.send('g')
      elif code == 'h':
        ser1.send('h')
      elif code == 'i':
        ser1.send('i')
      elif code == 'e':
        ser1.send('e')
      elif code == 'f':
        ser1.send('f')
      elif code == 'i':
        ser1.send('i')
'''
      elif code == 'l2':
	ser2.send('l')
      elif code == 'm2':
        ser2.send('m')
      if code == 'n2'
        ser2.send('n')
      elif code == 'o2':
        ser2.send('o')
'''
#      ser1.close()
#      ser2.close()
    #self.send_response(200)
    #self.send_header('Content-type', 'text/html')
      return
    return self.do_GET()

server = HTTPServer(('', 8080), MyHandler).serve_forever()
