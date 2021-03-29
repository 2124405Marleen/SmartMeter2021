#include <Arduino.h>
#include <XBee.h>

#define TEMPPIN A0

XBee xbee = XBee();

void setup()
{
  Serial.begin(9600);
  xbee.setSerial(Serial);
}

void loop()
{
  delay(10000);

  analogRead(TEMPPIN);
  delay(10);
  int val = analogRead(TEMPPIN);
  //convert temperature value to celcius
  float mv = ( val/1024.0)*5000;
  float cel = mv/10;

  Serial.println(cel);

  char tempStr[8];
  strcpy(tempStr, "");
  dtostrf(cel, 3, 2, &tempStr[strlen(tempStr)]);

  char fullString[20];
  sprintf(fullString,"%s-%s-%i", tempStr);

  XBeeAddress64 addr64 = XBeeAddress64(0x0013A200, 0x418F8DAD);
  ZBTxRequest zbTx = ZBTxRequest(addr64, (uint8_t *)fullString, sizeof(fullString));
  xbee.send(zbTx);
}