<?xml version="1.0" encoding="UTF-8" ?> 
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:tei="http://www.tei-c.org/ns/1.0"
    xmln="http://www.w3.org/1999/xhtml">
    <xsl:output method="html" encoding="UTF-8" indent="yes"/>
    
    <xsl:template match="/">
        <html>
            <head>
                <title>
                    <xsl:value-of select="//tei:title[@type='main']"/>
                </title>
                <link rel="stylesheet" type="text/css" href="style.css" />
                <script src="script.js"></script>
            </head>

            <body>
                <xsl:element name="div">
                    <xsl:element name="h1">
                        <xsl:value-of select="//tei:title[@type='main']"/>
                    </xsl:element>
                </xsl:element>

                <xsl:element name="div">
                    <xsl:attribute name="id">introduzione</xsl:attribute>
                    <xsl:apply-templates select="//tei:encodingDesc/tei:projectDesc"/>
                </xsl:element>

                <xsl:element name="div">
                    <xsl:attribute name="class">container</xsl:attribute>
                    <div class="prova" style="background-image: url('7694-030F.jpg')" name="click" alt="img1" id="img1">                    
                        <xsl:element name="div">
                            <xsl:attribute name="id">nascosto</xsl:attribute>
                            <xsl:element name="p">Donna seduta</xsl:element>
                        </xsl:element>
                    </div>
                      
                    <div class="prova" style="background-image: url('7694-064F.jpg')" name="click" alt="img2" id="img2">
                        <xsl:element name="div">
                            <xsl:attribute name="id">nascosto</xsl:attribute>
                            <xsl:element name="p">Fievre d'amour</xsl:element>
                        </xsl:element>
                    </div>
                    
                    <div class="prova" style="background-image: url('7694-145F.jpg')" name="click" alt="img3" id="img3">
                        <xsl:element name="div">
                            <xsl:attribute name="id">nascosto</xsl:attribute>
                            <xsl:element name="p">Donna alla scrivania</xsl:element>
                        </xsl:element>
                    </div>
                </xsl:element>

                <xsl:for-each select="//tei:TEI">
                    <xsl:variable name="car" select="@xml:id"/>
                    <xsl:element name="div">
                        <xsl:attribute name="id">cartolina_<xsl:value-of select="$car"/></xsl:attribute>
                        <xsl:element name="h2">
                            <xsl:value-of select="tei:text//tei:div[@type='fronte']//tei:head"/>
                        </xsl:element>
                        <xsl:element name="div">
                            <xsl:attribute name="id">tasti</xsl:attribute>
                            <xsl:element name="button">
                                <xsl:attribute name="id">fronteT<xsl:value-of select="$car"/></xsl:attribute>
                                <xsl:attribute name="class">tasti</xsl:attribute>
                                Fronte
                            </xsl:element>
                            <xsl:element name="button">
                                <xsl:attribute name="id">retroT<xsl:value-of select="$car"/></xsl:attribute>
                                <xsl:attribute name="class">tasti</xsl:attribute>
                                Retro
                            </xsl:element>
                        </xsl:element>

                        <xsl:element name="div">
                            <xsl:attribute name="id">fronte<xsl:value-of select="$car"/></xsl:attribute>
                            <xsl:apply-templates select="tei:text//tei:graphic"/>
                            <xsl:element name="div">
                                <xsl:attribute name="class">fronte</xsl:attribute>
                                <xsl:apply-templates select="tei:teiHeader//tei:bibl"/>
                                <xsl:apply-templates select="tei:text//tei:figure"/>
                                <xsl:apply-templates select="tei:teiHeader//tei:supportDesc"/>
                                <xsl:apply-templates select="tei:teiHeader//tei:profileDesc"/>
                                <xsl:apply-templates select="tei:teiHeader//tei:correspDesc"/>
                            </xsl:element>
                        </xsl:element> 

                        <xsl:element name="div">
                            <xsl:attribute name="id">retro<xsl:value-of select="$car"/></xsl:attribute>
                            <xsl:variable name="retro" select="tei:facsimile//tei:graphic/@url"/>
                            <xsl:variable name="num" select="tei:facsimile/tei:surface/@n"/>
                            <xsl:element name="img">
                                <xsl:attribute name="src"><xsl:value-of select="$retro"/></xsl:attribute>
                                <xsl:attribute name="id">mappa<xsl:value-of select="$num"/></xsl:attribute>
                                <xsl:attribute name="usemap">#map<xsl:value-of select="$num"/></xsl:attribute>
                            </xsl:element>
                            <xsl:element name="map">
                                <xsl:attribute name="name">map<xsl:value-of select="$num"/></xsl:attribute>
                                <xsl:apply-templates select="tei:facsimile//tei:zone"/>
                            </xsl:element>
                            <xsl:element name="div">
                                <xsl:attribute name="class">retro</xsl:attribute>
                                <xsl:apply-templates select="tei:text//tei:div[@type='details']"/>
                                <xsl:apply-templates select="tei:text//tei:div[@type='message']"/>
                                <xsl:apply-templates select="tei:text//tei:div[@type='destination']"/>
                            </xsl:element>
                        </xsl:element>
            
                        <xsl:element name="div">
                            <xsl:attribute name="id">fronte<xsl:value-of select="$car"/></xsl:attribute>
                            <xsl:element name="div">
                                <xsl:attribute name="class">note</xsl:attribute>
                                <xsl:element name="h4">Note</xsl:element>
                                <xsl:apply-templates select="tei:text//tei:div[@type='note']//tei:noteGrp"/>
                            </xsl:element>
                        </xsl:element> 
                    </xsl:element>
                </xsl:for-each>

                <xsl:element name="div">
                    <xsl:attribute name="id">footer</xsl:attribute>
                    <xsl:element name="h3">About e Credits</xsl:element>
                    <xsl:element name="p">
                        <xsl:value-of select="//tei:respStmt[@xml:id='trascr']"/>
                    </xsl:element>
                    <xsl:element name="p">
                        <xsl:value-of select="//tei:respStmt[@xml:id='comp']"/>
                    </xsl:element>
                    <xsl:element name="p">
                        <xsl:value-of select="//tei:respStmt[@xml:id='resp']"/>
                    </xsl:element>
                    <xsl:element name="p">
                        <xsl:value-of select="//tei:respStmt[@xml:id='funz']"/>
                    </xsl:element>
                    <xsl:element name="p">
                        <xsl:value-of select="//tei:respStmt[@xml:id='ente']"/>
                    </xsl:element>
                    <xsl:element name="p">
                        <xsl:value-of select="//tei:availability/tei:p"/><xsl:value-of select="//tei:publicationStmt//tei:addrLine[@xml:id='labCD']"/>
                    </xsl:element>
                </xsl:element>
            </body>
        </html>
    </xsl:template>

    <xsl:template match="tei:bibl">
        <xsl:element name="p">
            <b>Titolo: </b><xsl:value-of select="tei:title[@type='titolo']"/>
        </xsl:element>
    </xsl:template>

    <xsl:template match="tei:figure">
        <xsl:element name="p">
            <b>Descrizione: </b><xsl:value-of select="tei:figDesc"/>
        </xsl:element>        
    </xsl:template>

    <xsl:template match="tei:supportDesc">
        <xsl:element name="p">
            <b>Stato conservazione: </b><xsl:value-of select="tei:condition"/>
        </xsl:element>  
        <xsl:element name="p">
            <b>Dimensioni: </b><xsl:value-of select="tei:support/tei:dimensions/tei:height"/> x <xsl:value-of select="tei:support/tei:dimensions/tei:width"/> cm
        </xsl:element>       
    </xsl:template>

    <xsl:template match="tei:profileDesc">
        <xsl:element name="p">
            <b>Lingua: </b><xsl:value-of select="tei:langUsage"/>
        </xsl:element>  
    </xsl:template>

    <xsl:template match="tei:listPerson">
        <xsl:element name="p">
            <b>Mittente: </b><xsl:value-of select="tei:person[1]/tei:persName"/>
        </xsl:element>   
        <xsl:element name="p">
            <b>Destinatario: </b><xsl:value-of select="tei:person[2]/tei:persName"/>
        </xsl:element>
    </xsl:template>
    
    <xsl:template match="tei:correspDesc">
        <xsl:element name="p">
            <b>Mittente: </b><xsl:value-of select="tei:correspAction[@type='sent']/tei:persName"/>
        </xsl:element>   
        <xsl:element name="p">
            <b>Destinatario: </b><xsl:value-of select="tei:correspAction[@type='received']/tei:persName"/>
        </xsl:element>
        <xsl:element name="p">
            <b>Data invio: </b><xsl:value-of select="tei:correspAction[@type='sent']/tei:date"/>
        </xsl:element>      
    </xsl:template>

    <xsl:template match="tei:text//tei:div[@type='note']//tei:noteGrp"><!--notesStmt-->
        <xsl:for-each select="tei:note">
            <xsl:element name="p">
                <xsl:value-of select="."/>
            </xsl:element>
        </xsl:for-each>
    </xsl:template>

    <xsl:template match="tei:projectDesc">
        <xsl:for-each select="tei:p">
            <xsl:element name="p">
                <xsl:attribute name="id">introp</xsl:attribute>
                <xsl:value-of select="."/>
            </xsl:element>
        </xsl:for-each>
    </xsl:template>

    <xsl:template match="tei:graphic">
        <xsl:element name="img">
            <xsl:attribute name="id">fotoF</xsl:attribute>
            <xsl:attribute name="src"><xsl:value-of select="@url"/></xsl:attribute>
        </xsl:element>
    </xsl:template>

    <xsl:template match="tei:zone">
        <xsl:element name="area">       
            <xsl:attribute name="shape">rect</xsl:attribute>
            <xsl:attribute name="coords">
                <xsl:value-of select="@ulx"/>,<xsl:value-of select="@uly"/>,<xsl:value-of select="@lrx"/>,<xsl:value-of select="@lry"/>
            </xsl:attribute>
            <xsl:attribute name="id"><xsl:value-of select="@xml:id"/></xsl:attribute>
        </xsl:element>
    </xsl:template>

    <xsl:template match="tei:div[@type='details']">
        <xsl:variable name="var" select="@n"/>
        <xsl:element name="div">
            <xsl:attribute name="class">info1</xsl:attribute>
            <xsl:if test="$var='1' or $var='2'">
                <xsl:element name="p">
                    <xsl:attribute name="id">t<xsl:value-of select="$var"/></xsl:attribute>
                    Timbro:
                    <xsl:value-of select="tei:p//tei:stamp[@type='postmark']//tei:mentioned"/>
                    <xsl:value-of select="tei:p//tei:stamp[@type='postmark']//tei:date"/>
                </xsl:element>
            </xsl:if>
            <xsl:if test="$var='2'">
                <xsl:element name="p">
                    <xsl:attribute name="id">t2<xsl:value-of select="$var"/></xsl:attribute>
                    Timbro:
                    <xsl:value-of select="tei:p//tei:stamp[@type='postmark2']//tei:mentioned"/>
                    <xsl:value-of select="tei:p//tei:stamp[@type='postmark2']//tei:date"/>
                </xsl:element>
                <xsl:element name="p">
                    <xsl:attribute name="id">t22<xsl:value-of select="$var"/></xsl:attribute>
                    Timbro:
                    <xsl:value-of select="tei:p//tei:stamp[@type='postmark3']//tei:mentioned"/>
                    <xsl:value-of select="tei:p//tei:stamp[@type='postmark3']//tei:date"/>
                </xsl:element>
            </xsl:if>
            <xsl:element name="p">
                <xsl:attribute name="id">f<xsl:value-of select="$var"/></xsl:attribute>
                <xsl:value-of select="tei:p//tei:stamp[@type='postage']"/>
            </xsl:element>
            <xsl:element name="p">
                <xsl:attribute name="id">n<xsl:value-of select="$var"/></xsl:attribute>
                Codice identificativo: <xsl:value-of select="tei:p//tei:add/tei:idno"/>
            </xsl:element>
            <xsl:element name="p">
                <xsl:attribute name="id">s<xsl:value-of select="$var"/></xsl:attribute>
                <xsl:value-of select="tei:p//tei:stamp[@type='stampa1']//tei:mentioned"/>
            </xsl:element>
            <xsl:if test="$var='3'">
                <xsl:element name="p">
                <xsl:attribute name="id">s3<xsl:value-of select="$var"/></xsl:attribute>
                <xsl:value-of select="tei:p//tei:stamp[@type='stampa2']//tei:mentioned"/>
            </xsl:element>
            </xsl:if>
        </xsl:element>
    </xsl:template>
        
    <xsl:template match="tei:div[@type='message']">
        <xsl:variable name="var" select="@n"/>
        <xsl:element name="div">
            <xsl:attribute name="class">info2</xsl:attribute>  
            <xsl:choose>
                <xsl:when test="$var='2' or $var='3'">               
                    <xsl:element name="p">
                        <xsl:attribute name="id">d<xsl:value-of select="$var"/></xsl:attribute>
                        <xsl:element name="i">
                            <xsl:value-of select="tei:opener"/>
                        </xsl:element>
                    </xsl:element>
                    <xsl:element name="p">
                        <xsl:attribute name="id">m<xsl:value-of select="$var"/></xsl:attribute>
                        <xsl:element name="i">
                            <xsl:apply-templates select="tei:p"/>
                        </xsl:element>
                    </xsl:element>
                    <xsl:element name="p">
                        <xsl:attribute name="id">sig<xsl:value-of select="$var"/></xsl:attribute>
                        <xsl:element name="i">
                            <xsl:apply-templates select="tei:closer/tei:signed"/>
                        </xsl:element>
                    </xsl:element>
                </xsl:when>
                <xsl:otherwise>                   
                    <xsl:element name="p">
                        <xsl:attribute name="id">m<xsl:value-of select="$var"/></xsl:attribute>
                        <xsl:element name="i">
                            <xsl:apply-templates select="tei:p"/>
                        </xsl:element>
                    </xsl:element>
                    <xsl:element name="p">
                        <xsl:attribute name="id">sig<xsl:value-of select="$var"/></xsl:attribute>
                        <xsl:element name="i">
                            <xsl:apply-templates select="tei:closer/tei:signed"/>
                        </xsl:element>
                    </xsl:element>
                    <xsl:element name="p">
                        <xsl:attribute name="id">d<xsl:value-of select="$var"/></xsl:attribute>
                        <xsl:element name="i">
                            <xsl:apply-templates select="tei:opener"/>
                        </xsl:element>
                    </xsl:element>
                </xsl:otherwise>
            </xsl:choose>
        </xsl:element>
    </xsl:template>

    <xsl:template match="tei:div[@type='destination']">
        <xsl:variable name="var" select="@n"/>
        <xsl:if test="$var='1' or $var='2'">
            <xsl:element name="div">
                <xsl:attribute name="class">info3</xsl:attribute>
                <xsl:element name="p">
                    <xsl:attribute name="id">i<xsl:value-of select="$var"/></xsl:attribute>
                    <xsl:element name="i">
                        <xsl:apply-templates select="tei:p//tei:address"/>
                    </xsl:element>
                </xsl:element>
            </xsl:element> 
        </xsl:if>
    </xsl:template>

    <xsl:template match="tei:expan">
        <span class="expan">
            <xsl:value-of select="."/>
        </span>
    </xsl:template>

    <xsl:template match="tei:lb">
        <xsl:element name="br"/>
        <xsl:apply-templates/>
    </xsl:template>

    <xsl:template match = "tei:hi[@rend = 'underline']">
        <xsl:element name="u">
            <xsl:value-of select="."/>
        </xsl:element>
    </xsl:template>
</xsl:stylesheet>