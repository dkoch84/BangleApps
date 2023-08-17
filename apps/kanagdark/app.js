function getKanagawa() {
  return require("heatshrink").decompress(atob("2GwxH+6AAC1nQ1erAQWr54GCBYIAG1gADBg4AT1mrD4ICBGBIAv63WA4w1sVYR2CAAR5E54YLHsinyB664kVgQCBAoKwEV5gA+PivWCxafjEaCvCAoae/Y3oZFDYQeSCR+rV4KyEAH6cnS4QACXDQkEEYwFDF4qwK1iU9KQipWC5p7ECYiAMBxI2IAAoKJVpav+RZTEMTIZsLAw4WEA4w5SbRbZEA4wAH1itBV7WrTCRcRRpInMWYo2KVRCvHDghPTEQprGehQAzHRZPGEbSvIRhqQGDI6QNDwgEFbwr7GAAesT96KXWhp/IS46VFV5AXIRxazRUoy9EVEC+WHBBBMKBptEGJijGEwiIGXw4QGKB41FV4xyTXmb9HaqQUSRRSgJYgjALKYwAHJYgaJ1iRiD+JgFZJp8ERJIlJChpXHUwoSFV5yzaORyfKBIwfMY6RAHRZxJDA4obFWCDGGFowYIVQKsaXaJWRAHTxIK5RZMEBAKJ1YABA4YEELr2swGAwIAB1gACwIuFWzAXDDaZ4EGpCdDFIiwMGCBJDY4YaFPIKxC56laEwKhDUgeB63XAAZUCAYIQDcUL/dQQ6vMWBYgEEZKvF1gBBKjSlCVw2s2SpDAA62B2Q4KPI6ddFQwQIWAYASGSgtFSIh3BVjGAVgKYBAAJOMBpPX1iEQT5ZmFTpSfFF4ypTV5BPLI4zLON6KtFKKjiBAAQFB2WH1erA4IsFJJ6aDM4yeKRQyBLV6YyIH5ABEWLeswKsBKC6jB1oCBwWzrvXAoPX2YDBWYJFUCYi2EOQiPLQIywacxK9GPhKaBNaOrVjCjCUgIDC2QCBxAAB64SFWISeFVxhrKV56qYEAoGKfZARFMwyyIDAmsVrAbC1mzq6uCV4WIEwKvFWIeBV5gLKTqavgD4pSMThAOKPg6tZWAeIwLOBEYSwBE4QHBF4QACAgOBJJhPGBASvTNA6ybAQoAYehSNBfjms2ezVoSvDBgYABVgOsVYS5DVRJpFNxCvyWoymQBBKOHVzyYCEIOswQCBOAi4DAAOzBQXX2WBUBakGK4auXAFKkLMJKtk2Ws6+B2alFFIYGDxA0BYYOs2QMB1er1gBBLY4ALV/6vKAIRRJQYfXGrHXAAIiET4K2DwICBGYoICAASuCEQfWd4Kw/WDpQKPIKBFVq4fDTIWBq+zWYesbA2sBoOyw+sq7SIV4JeCMBQKDV35OIABKtdQwPWDwKjCrqvCAAuIqywBTYIyCBYWyDIOIEYgkCAAZeNXwat/WJ52DEhwPMR4KJCV4QDCBweyBISsC1mz2ajCYA3XEIQTDAAOlKAZbKMIyz/V5iuPPAgOKUIOBRgKsBSYSVC6ybDWYWCwIUBCoOB2eBBYQHB2TFDGgSvHMRqv/VzqvIDAyWCSIIDCWQNWWYQPBwQLDWYjCEFwqzCaIOs1fQ0hcNV36tEKRqCDAB57CAoaSBVgQCBwWIrtdxGzTYSRCUQIICA4NdUgoABwWBXooLEXgSeDV/6rZAAJ/BVx6hB2SnBTAaUB2avCAQYOFAAVWgFWAoTIBAAYkEAATQBAoggB64iBrmsVZ6u9WASuOq6uPAAOIP4Z5B1uIwOyVYIMDWAYMBU4XXlcBgEAV4aiD2QaB2YHCC4IeCAgKtBAAQgBwIJBV6q1tFogECJaGBCQYrNOYKKBWYaGC2WyAgWCRYOzwOI2eslkBg+twKvBgIaBS4oRBZAi+CWoQMCFAQJDAAKuTVtur1fQIoiwRCIYtO6+zVgQACwMAAAVWBgK0BRIQCBVAKrBwWChECAwMHXwKqCAYQqBaILODBgImBF4S/Fw+rWBR8DAQiNLUq4HHHpKtPKA6tLO4NdVwmsVwaiBXYNdwKMCCwKvChGIlgEBAAQOBUwIDC2QtBAgKlBDwXXw7jDBYOt0oFBVwOs5/QAQIDBLwyLHPwawcV5YEDCQiwePgOswSMCAoIABTYMHVoKbBlaoCq6MCSAMHhANBYYbCBmTODCYPXbgIwBZITOCGALkFVgWrwACBK4SvDOIqCGWQoAWZZAsHVIasRIB6EB1uCTYR+CBYKHDg6rBr0zhCnBRQYNBVwKwCYYayBaQKuCV4QkB1rbDAAYSBVoWrUwIBB1irDLYwFJXwyuVV5SkSWDByB1p7EQYSMB1lWrusmSsCAAWC1ksAYOtV4wCCwIdBVYWBVQYjBVINXVogAEKIStDBAhbFVQgMFAoy1RDAbTFAD44OOoy2D62BTIMAxCuEgKVBUwSZBVoQCDZwOzxCqBFYjIBVIOzbgS/CHgfX1mlVIbvCwOrEAKDDMoyoMVyC2KGYi3bV6GIAQVWwIFC2czTQOCU4QFBVIQACgGsCAQABhEIlmBqwUBqybB2QkCAgPXTgOsw4FBWIYED1ioBX4hIDAgSvJVopvEOhrNHVo4ATI4JWBV449INoYADVgWIrqzBBAMIUYKmCUIStDAAOIlkBgQKDAAoqESYQzD6+HWgI9CUwIEDfRK6DEASFFSoqwTCYyOGWSyuBWAg1KPgWs2dXQoilDgMH1ifBAwSuCgSvFwIKBBIQMEV4eC1mySgSiBGAWy2esroMCIAIMBWYi5DBoWyDYbJBVIyWHBZK0NV4yuV6Gr1YFD54vJK4JcEwSLBWYMySQSmBrusS4cJhAECUQoJFBYsyFgLjDAASrBT4WyXIQMDCogABBwRNEAAiJGAQaXFV4yfFVg5LBVKwAF5/QD4erdBJXBlkAlYEBSoUAwOITggNBgCZBhMJUgy4EWIYUBxApBFQIwCAQOIrszUgqsC6+B2ayDBQIBBXQmIYIWC1i5DVYacHUJB3HWJIAjGJWBRIWCAgKSBgEHWoMCTIcrUAQHCWgIADhC4Cg4JEEwMyrqFCBAOI6+CD4KSBTISWEcwOBWoSsE2bFEA4ZXCV4KwDSQajOWBy0MGgSveqyYClaFCAAOsBQKuDS4MBhKkBAoKvEVwISEAQUHxACBlkIg6pBDYOzmc6hEzUgSVBWggHC65HBVQwTCBQRjEVwqjVDo4hFAganUXw48KwKUC1iUDgMHgCOBA4cBRoIPCroSEVwYCClYLCVgMPZotdFwNkmYYBSoPX66fC2SlE1YMB2Wz2a8DCYerPoK4CQQqMDN5AIFC4yJPWSomLAweCQAKSEgNXVgIGCR4UBh4HGC4SvCDYeIBoVkBAIUBAAS4BgEzmbRBq6nEUIYII2a9C6zED62swIUEM4qyEWhSbGCIgbFDQ6ueAAmBQoKXCg6sBAAMzAYSPCxCOBA4VdBIUPXIYADBQNeXILCFAodWSgSRDUAQACBIeHBAYUBVoIFCVoILDDYZoCOBoHGC4bIJV94ABgUCAYMsV4aLBRwSuCXoYJCskJVwoABry4DWAgECgChCSoKzCxAHBIAPXwQGB6+yToWyCIKuCXwOz2QTBDoYAB1ZrEV6IHIBgwOEbZAAJeAQCCWBusQQSWBQoMzSIKnBR4YIBA4Nerq6CgMIAAIQDAYUIXAqwDVwkHxFWVASmBwKWBAwQACAggHHXAZYCXIICBRYacMVyIXLAAy5QEhawBgCWCryKCg6LCTYWsBwKYDW4NesijClkHXAq2DmcsX4oeBq2sHQmISYXW2SnD2a7BBoQAC1oOBCATFBV4QADV4aeXV6qsQV53XrsAS4aVCnMyR4KNBTYddrqUChEPY4QZFBAbDCVQgRESASRBVAalB2QGDWIQDC2WzBwKiC62HXQa9EBoZtDOQq4OY6KdIWxwkM1kBg6ABg8AmcHmaQCgEChM5BoMslalDnUCT4TCBgOIW4kA1gKCCwddhEHTIKeCHIWIwSwB66jBxCmDCILAB2eCBwLJCXYfXrogDDASgVYg6XDDBacIVZKvP62IS4MsRYkAgFdgEIAAMB1uIXAKYChIDCmQDCmkIDALJCq6tEhMITwKEBxGySQSiCBIQODAAmBT4QUDAwioDMwIPDOAR9FSxB/MDIrMIDZSpEWYwAMOwOCRYMsgGCPIOIq8AmavBgEHTIi4CUgMBg8AxE0A4J+BWIQUEh8IboIZCUYyxDAgIFCX4ZIBBIVXwIEB2YWDUoqvEPIyoNS5QSRbogAJEp5xDOwJzBli1Bg8yWYKbEh8PUAcBrqdDgOIV4QAChE6hFkBwMJgTaB1mBIQanCZIK0CAgSuCI4QRBJIeBWYIwBNIoGBBAyvEVCKMFXqivNACmIPAi2CgKxBSwKuDmYHBskCAwKrCZQMAxEPVgMImcIlghBwSPFFYWycoKuCeAIQBVIRCC1gIBBITQCNxR4VBgjECCowFCBgYXJWArCMACJ7BTgMH1iaBVAKbBgB0BUoKvBmitBQYIIBg4TB1kJmcJxGImREBwCNBf4eBVAIZB2WzEwOzBISuC2RACXwKwCYISvCOAh1FPQp4OTggWIV4wjGHJAnHVSJwC1ivB1ivBgNeUoIABhyvBmUHgMyhEIUwKpBVgOCXIUIhM6YoMySoI8HS4SYCU4Q4E6+I64TD2XXXYSzCMwa0CABR0NBwYTFBIq9HZxS7IU5haCA4pkCO4csTwIBBWYMInIHEUoIFEAgIFBr2IWIIABQYKFEHI2s1YFCAAKbDd4XXAAOyXgRICwKGDQ4yLIO5qzGBZIDFWBYSFG5paBOoJmBPogJBNIR2BgMHTwUImcPg66BmcBhMJCQINBA4KvBVgauDHohKEAgSvBT4S3CBQI8BA4ZIB2QIB2YJCw4ZBCoQALTpB+IYCDQQCyKkCNAgLEV4UAUoKvErqlCUgUBr0BlgACA4IACYIKuBwQlCIxaZDIIb2EWYLsBfQOsYIQEB1mtCIKuMThJ+JfRC7EBpS5XOASiBWIivFrqYBV4MsTgdXAoMsq8yrsBxECVAWIYAUBVgIABlhXCLI4FC6A4CwLyECgJBDA4OCWAWB2YRB65WBq4XCCoKrHAIoAcLBAAcVgeIrptB2RwEmSmBVIUACga4BwICBg9eV4UAVgIACV4aYCLIoGDAYOs0ojBBIQsCCAa9ClgCBI4KyBHwYIDVo6IEHIoHGUQ4FQADOy2SuF2eBLAQDBq2IWAddmcIgMHgNWNYKfBCwUHVAMIgUsX4UyVwkJV4ZWKWAQzCAoaYE62rUwez64PDDAQDCCAasDAQqUOeQoKHK5YMCDhRpHKYYGFAAauDNIICBwKvBwLHE1usgErwS2BUoMsCIMzVwIDBhABBV4J2DTYYFGQonQqzpDMQ2s65FBw7BEAgLxBEgoAHPxSdLHQjQHEZYxIA4Wsw9dWAtdVAIABBYWzqwbFCgYEDxEBg9dgFdlkJVQUBgADCVwM6XQKnEJA6zFN4qsFV4jzBxCvDBYYeEDQo4ERZKpIUhofODhhTCKgIDCV4YACw5pB1mBVYYAC1bABlesmQCBU4UIUgKxFh8IAIMyMAh6IUg5WGAwRHC66wBI4SqBBwKyDaIbVEAwyHKZYgbGC5JTGfQgGFKweBVwqvEwJdCAoS2BA4JrCDAYCB1uBq+BmalClasBhAFBWwS4DhK6BV4hmEOIq+MUIRIDe4XX2SwCUhQFGRAoAJEAgNJJQwqFABlX1mHVwoAC2SoBAARgCBoOywIWBV4fQBoUswVXTwINDgMH1mImS2Ch85nSvEVA5jGRRmsqytBAgJGBAoIACDYopKQyDwGBRRHFCpLVFSQWzUoNdVwhfCBQIGC2QLD2S2DAALBD64CBEAOzAwYACQAUHhAACqxPEWQpmJRYgFDCwnQVQY0DZgx7FQJivPIQhFHLg4DHAAdWxCABSoOIUAOHTYiqDwIEECwWyDQYSC64QDXwsAgMBrtdhEJhMIwJ2GPg5rECYiiBPAnWewIxDA4JKBWgSuHAYoCEV5wQLBgglTAANdUYSHC66PFAARdBUoQOB6/X2QLDAQLKCB4YnBBgWsq6vCgMzhAACQI5SJBYq3EXY2s1ZbBBgSuCFoQCCVIo2GcxChHJgrgCJowhNB46FB65QBxCoDAglXSoVdBIeBlgQCD4SrDaQeywK5BCAOz1iwDVwUHQgSeFUQpuEAgqVJWw6jHW4QLFEQg3FSIrENABIRDCooFHwVdwKUCqymCAAKLBmSSB2S6DAgKWCmQjDBoWyrq4CA4Vdg8BqwXDV4UJg52FOY6BFUhKBIDAymGEpA5FHAakFVxBPFEAghGXhQhDTYNdAYOyRwQCBwMBgEswMAq3XAYMABwKWCCAKvDYIKxCDwVWq8BhIgBwWCV4kIlg9EMxCfJCxIARV5SCJUwoXECg6yGBo4FHEgmCRwVWwKOBw4PBxEBg8IgEBlfXliWB1mCrssrtX03XDQNdD4SyBagIFBDQKvBgNdmSvCWAMJZQKtILgZlFV6esAQTMUG4otOBg4XEK4i2IW41dQIKOB1mrSoXW1iKDg6ZBAgISBTYMHUAITBgNXDAWs2QCBg8s1qnDgMsgC2BA4UIwJeKVhyhCCoqtDAogMECwh4EAowMHYhw7IZ5AUN1igB1ixBrivDgEyg8ywWIg8CgKUCmcIgGIwSaCwWy64ABFQOBg8HBgUJDIOCrobBhEJV4pPFfYhwHABy9IFoouGAYQJIGB6vOAA6+HUgKKBVQIAEB4NdmUBlcyVQUBlibChC1CWgVW6+swQaBWQIfBCYgUBAwQHBhEyNBCtEO4wIGR44KEWAIbEW4p+IAIgIFV54YEFIqvNL4iHB1avI1mHrq8Bg6sBBQKcChECgOImYDBwPXmUsB4IXCAAKqBU4IbBZYbHBgKqGN4x1JXxZ/GExaAIRBQ+MWA7SFGJBKFAgWBfIKuHAAXX1lWlcyVwWsxCcCgFdxEImYQBgEAVQQOCV4QEBgNXlgGDhMP1h/GSYyeJQBC5IQIoUGPwwLHVBDPKCZpmIAAqnC1mBVwQpCAgIIC64xD2ShCgMJgOCUAcBxGsYIMAwUshOslgLBsgCBB4IHCWANXOgYDFAohaIAZJlGahAJFVwwJJSpDLHHpjWJAwuywNdVoS1CVwWsTQIIDCQIGBlaTCg8AwNXV4WBAoK4B1gJBV4UAhAPCg4CBgEPhEyQAgEGVxCzIUIp3HAQ7iFboyrLHRKzGKZDTJCIqlCqylFWwYIB6+s69d2YHBrqUBWAMBWoYCBlmsUAIBCmYJBmc5AgQADmcImesOBBgFOhSPGOoYMHYoqIGGAzlMaQrPKDpAMEbxFdUgWCVYdcVwnWAYOBBAeCgMHlkIVYUAAYUHq0B2eyxEBhIKBg8BnKsCAoMAg+sAILqBNxRaHQRa0GYZZ6GZQwtQIIjPGBQyvFNQoJEAANW1uBxGI1qsDAAK5DxABC1nX64DBmaZCgKlBwWsgDFCgECBIMyxEzVwMs6+zwMH2czxBtSPqIDFYiS/FDhzLFDRDkJABKIBq1WWIKvBSIIKCWQPXXQKeBAAMyAQMHgEH1kIg9XgEIr0sgINBgNXAoMJXoUPWgK8CAYMIhEyJgL1FJA69gTSCuNTgTDQBZRfG1ldrqgBxADBgFdPwK3BGYOz2SHCCAMz1kAAAMyrydBgMshNdXAINBYQIJBhCvBgKvCAAIGBgIaBIA6yiS5gfYEpIvPP4IABBRWBPwNdQwIGBAIS9B1ivB62yg8B1iTCgOCV4UzUQgCBg6wBBAMsgFemUsBAMBlcyhEIxCkHLpCvNBoYaIBAgfEXaYTLGRqlIAQYIDmWIUAOsTwMsQYOsBIOCXoYPC64WBmcCV4UImawCUwQABq8Ama0Bry1BE4IBBXgKvBlYVBhCeFfBAHONwJjCTaSKIXCarNUoYHFAAQOEAYOIRIIHBSIKqBq8HqwWDxGBVYMABIU5h6VBUIMBmcHUQKZBgNdgEr1kAaoITB2eBxErW4Ndg61BZYIpBJopbHMIykKBQXWfoINJX5o9KUIjdVVAiwELYesSoWsrsJhCaBTYNdC4oSClcB1sBr0JljKBgFXZQVXCAMBxDEBgGCUYMBwOCbgMzFYQaBxFeDIKcFWAy2GWJqvDQ6qNGFw4kGKBRMHABuIgMHUAMIhEHwMAmWsAIOy2QQB1kHmWzRoMIrszCgKXBgNkZQSvCY4gIBmQsB69dbga8B664Bq5NHfQqoHUBKsDCwoSIXhwaHTIoSJGYgATQYMHhEzh8IhKSBliXCVwIAB68sA4KOBg8znMIAwNeTAMIlmCVwXXPQKgBEIMHr0BwTYBC4LlBlmswLPBRooAMB4qBEOYiyDUpYaETwilHIJQ0HABurAAYIHgFdUwMzxEIQ4KZBg6IBCYNelhgBgGsxCVBgE5mYTBliSBmUIEAKuDAAYMBVwLYCZAItCboUImT/RNg6WFWxCuIRw6VHTh4ARVgizEWgaLBq54BmYABhEIg6BC1krRIMrCgUsWQIWBhCwBBAPXwUyrusVoqxEromBmcsEgNdrobBGwMIwKvYBIyyHEJbIEVEqqJAA2BPQKaChOs2avBP4MAPwMCliJBWAMAxAKBg6RBCYYFBYAPXV5PWBYJBBxFXlY1BFwUBhMsJwRaEAwoASSyyteUZmlAIQADwGkA4OsSQUymUBmczhEJBAMIVAMCAoIABAwMsRgVdAgNerwLBWAOsVxSxDWQPX1srEoMsq4wBmawDVggFCAYgANbgQAkHAwGDJoQACAgelwIAB1YBBVgQJCwGB0uAwFdwUHmZ4BPYMAhEInQCBVQcHAoKjCgOBCQMHAIIOBxAOBXYKsMA4zSBmddgDTBhOIJ4IAHM4ixIVLomIVA49DA4gAFUYOlAASsBWASsCVAIABVwQeBgKkBryRB1ksVAQJBAAScBXwIEBq+CRAMA1iyBD4QIBDwSvLW5FWlldg+CGwMPDwJSBLIRsBAYSyGPYq8FAQqWIB4gDCZoYXIGw6nEUYIGCwCjBT4KsCVAYAFwNWAQKmBUQUHmcCOoMHTAKvETgK5DBoK1BgFdlkAwNdq0yBwOs66vU68rgMrZ4czmJfCfgRjBAoS0DPhKLE6HQB5AYJDwwLJVpAFDU4aqIBANWrirBAAItBhEJlmswUIrqkDlgGBPIUzr0PhKwDAAMA1kHq+sCQMrq7SBVyoAC1iwBgEAmeIbQOBMgeBJ4OlWgJdBLwICBQhKSCBQaTLADCsEHgL6CVxYACV4OAvVWq+IgMJhOsOgNWTgKwBgQEBmZ7BBAKuBh4KBBAIDBmSxC62zq3X1jRBVqywDDgIzBGgMzfoRnBf4KsDAAQGB0oDDOoJ9CAYaLIAYLYEDQKVCCgjYDAgQuBAQQvBUJYADvSnBAQIGDA4JgBUwcHU4MHq0rvR0BlgIBhANBrqjBgNklkzh8BrszwUHmdXleB1mBWYOIVrIAB6+ClkAmUrgL4BNQYuBKwOlWYSPBLgKBCB4ITCYoQHBXAQICCATLEUQTXDCgIjBCgQQB1aPCDoqmIAohMBABASCwMsTYMy1msWIMsq64Bq0ABgKxDmbCDxC6DwTIBWoNdZANXwSubWAVdgNX1g7CKQKeCvV6KAJsCNIKoDP4aBEA4ITBSYYATUQ6jDGoSZCAYQ/CUolVAISsDAYRZBriVCqxeBlcHqANBgS6CVIczCQLCBgEIhIHBBAKEBBYSvBwPXVzpBBlkAAAKwBg+B1h0CFoPQwNW1ZlBPoyGEAYgFHAAR8CBoQhGaoIFDBgIODVAYANVwayEAAMsRwKUBg8BlkrfgN6TQM6gMAg8ACQKwBxAWBAASxBmi5CroIBgFWVzqvD1lWGQiwB1Z8CWgOBPAZ5BPQR9GB4gAGCwYFHVASsCA4WBcQItJACayBmSrC1mBg8Hq9dFgWs60rXAKfBOQUAgOImajBPoczhFeAQIHBlagRB5yuB2fXwLYCGQMrPgJYBQoYDB1ZjCBYZsFBIoPGCw4ACGAKdVERAICBY0HV4NW63Qa4mBOgVd1mIlkyUwUsxCwBUoQABrquBhFkmczljKBTp2Bw6wPxCxBCwI6CKIMHLARSBAAmBUoYLDPgJxEBwS3IQQ2rG4LWCVJoJLGA0xF4csg6wBg7eBmSuG60ylkrmWBwVdq0BgEHwUBPAKwCgACBmcImSuMVAmyMoKwMBgLCBEoSwCWQVdKQJcB1dVVgWBBIK0DOQawGAAiJGaIhPD1ipND4tVHYQrEHI4ECOwMrlkylZXCPorpCYIIPBwOIg6oBwUzZgayDq+zTJZfBWAtdwKwMHgRDD1kycIUsg5qCmJqHAwikFShCFI1ZEF1gdIaxKsFABINCUwJfBGQOl1er1hyHWIIABw8BvWswNWlarDgMIWQIbGV5IBCVwOs2aeBFoKwNwJPBDYOslmCeQIBBL4MrqsrleAwFPUIrACWggUCZA6MDwJSGGoKaGbIweEco4qED4mAg8H0vP6F61atHw+AWAYEC6AABAgOBWQUyAwKdCWJ9XxGsqyaBqrJO6+I1oRDPYMrgEBg7wCwKbBq1PUQQACOQQECAIMxAQKDDB4SNDEII7JWAqkDZ4IkFAATaDp4NCDQoAB1ek1fP5+rSI6rD1eBBwOHVgLEBwGABQJ9CViITCTAbHTCYQUBCwR8BrssTwSQCUwVVXIQAIPgIXDR45CLGYIQCDgLQBa4YCCmI6DCAK/CAQawEVYKtC6CuINwQACUgIQBJAIGCAAKqSV42sxCvU62IQQ60ENgJ/COQSDDAAyKCWhBiBKpovCFgIXCFwQCBA4MxdwYABW4QVBmVWp9W1fQVgKxC1myGZWsruBmUHIwOsgIABwIXLABjOC66vBSQYaRcpiwEUYgCFAAcsmIABSgYABwJALGoawDDIQoGA4IMCqraBYYRTBgGAVIKsC6GrVwJvMwKoCgUy1mBg8BlgYNAA+yw+HKwIABwOI2aYLWBeyC4wGCQASaCQJKkDBYcyXoeBGxrgHbIjRBA4Q4BqwoBg8ygMHgEr0itCAAWk0pzPVwSvBgMyg8CVyxYCVYKSBSYIACrvXDZwPDZgY6BAoNWA4iADUoZ9BWQiLDCoN6CIigGwQ3GWA4wEVwIpDAoOAwMHgMAgN6VgSvD1eAxGyM4orDNAQ3B1itBhEIWQUIIwYAUVQOzV4JdD2esq7SUI4OzZATSB1mIAYQpCTgiBCAIIABp6DClel1es1VVVwRuBEAUsgADBlavCPgYAF1iqBqwlBqzhBGoXQewN5FoPP1SsCVoWAEY+sw+HBQI9BxBhC1crVoUBwLHFACgoCGguswKyBB4hFEAorREIwIXCVYQAEWAUxmJ7Bp58BQQK0CV4VVqurPotXxGBgEBgAGBg46C69dmQqCIAuHEYQCCp7aC1QqCAAmrcIZnEMIYABLAICB2Z/B1nQ6GHmVcG4ynOUIQqCwNXAoWtAYTkBB4KZBXoVW2SqGWI4WCPYWIJoSvDBIJqBPYR9CAAKtCAAMyDwN6QwayBYYKuBg+CWYOzLQQFBlg3DF4RSCEwasB1YlC5ytMDwIcCLYWBPgXXllertd1mrGQgASwIxBJwIxDbQQACroJCBYnXwWtC4ZDDV45SBBYIeCxAiEDYdXPwdVAAMxlgGBMQOtmUswWIEIKFB6CxBlcsliyBgAlCg9WAwMyldWxAeBwOBVogABaYasEVo5PDaQYAB1p6C2ddhAABryrUFQpKBS4gABwOIU4OB645C2QABUgOs2ZME2SlCFpQnECQKvFA4J9BVQUHgMBrteBQMygGIBAIAB1fQRINVldPTgwAGWQIABqwDCgIDC0itFaYKtINwQAC2ZwBhEycIWsh0JhMI6CvY2agCTAjjGro2BBQIBDB4THFUoivH64FEHxErgCjDmcHgAHCmYKDAAMr1aNB0kkUodQVYkAAQgADEoUAlUrkogB1ekZ4OBKQ2Hf4JsBPQcImder0IhFkVgMPVwMsMpgAK6+IwKbCDoWr66YDUoWCdoSmEw+tJIKvG1gKBHogjBIwdWNQxvFrqlFABSdB1fQwCdBp8xUooAFgCmBAArPBAARBJLwk5U4MIxEzUwMIVgIECBQJmDAAiuPSwYVFAwIlBIoIEBrq0CTAesX4g4FAgLHCEogGCEwWyKATyKCYNXmUsgEAWJusqqVBg8HBQKfBUAkrkkkAQNWq1PWoIbBMwOy6/XJggFBA4RbB2VkUgSrBAQkzLYIbFWKmCUYbNHBQSXCVoSFE66jDAAWzRYOs6AlEWBDUCBYkyAwh0CPwQ9BUoKoCAIIADWIeBUwgADlUqqoABYAOAwISD0qBIJQeHTgRnBLoMzV4syLYK/DQYIDBMQIAGR4w2FFIJuCCYNWW4mIFoIACboYACrq9E2deAoJICaIgYE64iDLoKpEDIMHxAsFMQQOCR4NXlivHA4cBWYOBwEqvWsVQICBvS1BldWEoZeGJAaVCAQQ3B2eIg5KBAAMzDwYTFAQSNBWA6pGGAQFB2ezF4SZBqwGBxAiBEIZHBxAZC64cCCQKvC2TmCg5KBJ4OyCILTBMxBdCUAbJEXAYoCHQY/C1poCwK1BWwsAles0tPqwABWwJ2IAAgqCAYI9BmeI6+Cq5HDgMHMwT2FJQiuDfoWHV5RVCU4WHroDBBQOtRIOyZouyDAQpCDYQLC2YbDHoWrlcznMsBgRxG1ldlmsmc6hAEBIYSwCrogBPgTQCdgheEdoIRBPYiaETYSpLAARKCg4DCHgVenMImRsDCoYwDV4ijKWBILG2YHBMgQxBaIInCVoSvEGgzpDgIHC0ulg8IhAuBCYRzFrqrCgIABmQqCrsBDINdDQJrBlkBJ4pAHAAKzDBYSHDK4wGBCYJpBOIJvBCQJRBgNdAAOCboh1IOgiID1jGB63QdASvHIoSsFAAOBw50BA4bTHL4S6EDAIHC2SVBg4KBwOrWAZLDwKwHmeIWAWBPAJDCBgJVCJwIPCcoibEUYQAB1eHLQJUDQggCBMg1WwMrAQJ8EE4arEVxeImddDgmtVwILBqwWIEQsrHAZLCOAQFBHIwYCwJPEPQaFDQwMy0urqyvEAAddMoesg+ClYZCxCWCXINkEIIACFIimDeowmDRoKCEwOIXAJiCPRCkHABYmCAAYGBr0JNQIACg/WGoITCWBz+F2SfBHRZmGYIaFBRwMyq+IgOrWAT3EAAMCwJeEg85gCgD2ZeCD4TiB6AEBAAMHdApHGH4RRHUCSnIcggjCxEHeQYAIV4KrImRTISYivE2RTKWAITBFoYfCgNelaTB1k5q3PWAWI2cBHIUHfIKwFKgcHNYMIgUCmddlgHB2UsCAYtBWJDzET6ARC6CqHQQyxFDAJ1BxFWKoMAAAJGBAgQfCqxLGRwSvGfxAbBwJJCWY50Jq8sHoIJBhEIwCwBqBSBg8IruzroDBEYqeDgI1BhAFChMsU4YQEg47FHgSDDWSAdGLYYfIA4gKDCo2IEIgFBFgoTDXAT1OF4WB67HCBwuBFwZoEToKGC1kzAoOr5OrqoSBxAIB1kJhIlF1ksT4eIxECAoS0CxBBBbQIACliwLQ4hhGWA5rCU4oFEAQQJErpwBU4RNBCYWtIAoKBQwQwCAoIDBXgQAMDIQABAgOBwJRDNAohFwJ+BxEBq2ImbKB1fP1bmBDQNXB4MJmY1GrqwEmYFDWAVd2YpBAAcyR4gDBd4SODBQwJG6xIBTIQXGCgkzmdeCAIxCnMIAAxLBAAiFDb4msw4sFABXQwI5DV4I2CJ4IHBAYQJBXQYuCgEAQQRSB1kywKwDw6eBhABBhGs6DNFUAZgCWAsIWA4eBAAxtEKQKvCNwalIwMIUQwVDAoMIhMJTwUzxD4Bg5FCgRCEAAQdB1avGcIhvE66wHVQIWDIYgABDoWIBAavEG4Msq4EBfgMCryvB1WrvRYCAIMJmWtmRAF1lWZwKwGU4WIdAIFBOgIABIISwJBY/XLgjBEwUHGgMPWYQWEPASvCWYQCCVg5VBgAaC1nQRomHTAKMGwOBAwhBB64SDf4uI2eyEQK/BDgQjD6+BHoUslhbBmcBwOr1awEWQWIFwMIWAomBmSwJU4KwDNwb/EMoikHXpgUBro1BhIABJQU5PIWz2YDBwRHBUgIACgT3CJ4MIlhBD63QqwxH6A7CHwhEF6+CJA6mBMIbHB69WfASwDg8Ag8Bg8zSQeIWAPP1WAmROBNAQbBg+IWAo/BqyhDU4kIwSwHmSZHWAVclcyruIWIq9IBAOBTAYACWoa2BP4uBq8sHQJKCAQKRBWAOB6HQUYqHDJgoJH1hPBZQSqCw4IBKgQECDQQnE62ITAI+BnMzV4crV4PO0l5DoMyg5hBAoMIA4IgDfIIoCUggADnILGgEsUIpDDCIjAFNoyxF1icBAAsCgUBKIS2Dr2IGwldFAQIBYYKdDW4KGEGo2BBQ+yD4OyqwKBVIezAgQIB2XXYILQBDoTvCgJLCLAawB1eq1ekw4uCmcH1lehDFBLAYlD1kHWA7IBQww2BWIwdClbBJBoT/CgC+EWQVWHBBmFBwJoCwJ3E1mHD4KCBGImrSAS3CAAOCCALyJDwPXAgPXWYmySYYrEAAJsBJQT5BKAiwB1Wq0sHlg7EwJdBV4IYBEYNdb4cyDwYAEnOsroLGSghED2YREgEAg7fBBwWyxAdElcywOC1mzI4UrDAI8IC4aDCEYIXBbwgwCVQeBwClHCAKwFOgSDDPQTWBYRKvDwMyegMsewZMEWAOr0omBq6KErsIlgCBhB0BAYJRBdQIjBAAyVBbgIAGLoOyPIRGBDoIPFTAMsBwQTBxBSBAA0yO4gACxEylgUBW4WBPwSAFxAaCTw6aCSY+y64iDOoIbBwWIfYQHCqz2DM4avE61WQQSvBnSwJYIOBlcrq1WWYeHWAKUCDoMIFocsNwQAFlreGF4WHJIZgB1lXCA0AZwJcEmQsEgBvBrsswOrRoICBUIdeKYJxDPYdXToyECVwivDWYmHAoIBB6xECKwbMFCIXWd4K1BdQnW2ZnEmZuFg6wB0lPlddlZODbAQtFmUHWAK9DBQMHWQ0Hry8BBQIMFEoixCVwoTCgErUoIACUQIKBW4UsAgWslanCxEHgJ2BAAapFTgiuCTwesqwNEWoQhCAwOzq2yB4ey2WIxANCPgIGBagYSDH4piCAQJOCAAUIRQOr1d5NQJtBwNWOoS4Bq2HBgOHA4MIGoOCKQsrUossmYvEXghsFDQLAGAAcyxAUCgMCD4opCIgNWgDyB65vEWIgzEXQpnCTQIVCAYYhCBoVdDgqXCGQJ6BAAJ6BbAQoEHwsyq6pCVQKwFLYOqWAIAB1mlMQMxq70EXoRFCq5vBGw0rTBQJBBYZgF2TzFIwynBAgZWCWoIDBlmAg5rFAAxIEGIRgBxFWTQeISQKJEw7DDBgLND60sg8sgIWBVwUImYSBEQQBCZofW6AZBMQcPWAi2D0mrz1P0t5vWAGgWrrldwOIAQNdlZBCAQRbCAARsCMoKzIA4kAEAL9C1mzmRBEhECUYIHCAgMAmS0FAQOBVhRwBAQIsCcwigB1gOBKgZaBCoJCBY4oGE60reIMBPYKvD1kzhEsCwi+BAgS0COYIBBVIawGwGr0gABAYNzz16dAerwNWAwddq9Wq0x1YZC0uAD4JWFJoLpBmWsKoK0EAQMyB4KlDPIMHCQVXwKmCE4OlKAcATAKuLRonWNogJDJYusaITyDA4IPG6z7Cg8zd4NeBYSzCmYcBFIywB65bCNwMCWApmCgN6V4SwB1WevOkvN6VgmHlcyQAIIB0qvB53PAYIAB1S3CvTNBCIIBBRoK0BAAkHlgiB1l6QYXQCYMBlfQ6GAAoIoBBQJOBaQKrIe4Z8ChEHCQIzEwR2BCQaiGFAOswWsdwKvG1kADgL9BLwMr1nXlkIhMIxHX6zoDw7rD61WDQKpFAAUChIDBp6RBSAKdB0uk1V5WgOlwFWq1cPIMyxFdrmAC4IABCgPPDoQICXQIECXoWlEIK8BvWAEwKfCksBOAUsla1C1ZGCZ4MBq6tIQwkHPQQACmXWVQOIgFdOwMATwwADR4VdxCuHF4SOEAAWsq6aBli1B6yrCDY+BWAcCWAq3Dg6qB0lzvWkQAKaBUAQMBSYLCBq2Bq1VCIShBAIPPWIQZDVoQKBAAQFC0vO1eklek1lWlkBlYABrpBBwIGCqErwKtHRYQACxCrDAAcB2UrV4UyOoSnFAAWBbIK6KcAiLCS4cyBAMIr2BB4Mrg7MKDAapDAwkHE4KsBAANPAgN6AQKVCT4SZBAAOjVoQAFBAIWBXYQAHagbABzyDBwGl0uevV0GYOlvVPp97vStH6CGHV4ZhEPIKuBAoMJBAdXWwImBDQNWqyqHVYgAECgJBBFgUsFQUzZ4PWrqXBAwKvGcYOBZYcHWI4CBlaVCz2lDgKOC0uAwC8CTQ6qBYQSzDAwgSCZgOq5wJDCITHCFAIFBcwNPlZ/B6B1GABSwBLAMAAAUyAoUslgEBruHg5zBBIKAERAoAPWAKWCSASgC2SdBhGIEpOsHQIYDWIoGBA4N6PgWeIwfQAAIFC1eBwOlXIISBAASWCXo4AB54JHDAS+DAAd6VoJVHVpYDCVIIADliuBgMzAIMyRYYDBV4LaDbwq0Q1grBGIadBg+sq8IgQEBZSKwIlelP4N6V4YBEABKPB1i4BwF5AAWeUYTEBlWr0rGEBgmAquAGYRRF2SnGrsylkHKYUHlldWQeIg6tCMwUAq5wDgQYCVgQABGAfQwIaBdJFWlZHCIAjUCxEshFWwQqCmeyDIQhIH4JJEWIwMBvSaBQQKxDWAy1LXhC9BAIIGDAoQACq2B1hSCJwibDr1dJwRKCAAinDWgczV4oACDAQLBGIKBDbgIHBGYKBCMoI+Ga4MBCYQcCYoUHxEIg4cBIAVdDANXFwQkFZISpDLopSEvOl0mA1atGABANLZQINDAopdBPQpICPoKrBrszJIitBg6qDAApaGA4IaCNoMzC4WIIwjdEHoQhCTYINDIYQKCroUCAYOylYJBwRFBrxAECIJbCEAgABOgMrKQZhBKYsHWIUBvWr1elTx6vMBI4nBVYquDg6iCgRGCUQoMCKAiwGAgOClgbBAoMsL4IRDg6UCV4qbBxAlEwPWXIOyCIMyBINXBAWCq+swQJBlZTBDQQ9CryuCwIDCNgXQNISxGDgYICXAkrvVWqySHwIABWBOBqwOCq0ylgrCEAQ9CV5EyHwakGU4oOGCIlWAQOIRgUAmYaFxB7FAoIIBg8zgQTCrqOCUAWsFYLKBTQOBCAOsq40Cq6SFlhcBPQQqBNIvQG4SxFdIhfENA4ADJwMBg9dUoWHqzRBAIIAFleBHgywKU4gEDUY5rEAQMHq2HFgThBnMHlkHgBjBCojqC1myeAKGCQoLCBnIUBJ4LODCIKbCAAYiCmYnCrssIgkHCwICBAAYlBAASvB6GyNoLSCNIacCABAREAYgRKHoQ1CVh6wEIYOBOYQAHMQMrqzjBL4QdFhEAmarBAAIGBaYh9EP4cHroGCDIIFBW4KbDCIOyBIWs6+swTaBgFXq0ArxQCFwWIhEImYxF2R8G6BvCq8rMwijEUQYkBBYIRDPwq9EfoTbBU6ANNAAxRCK4ZYDAAY8BhE6IASvBlmIqwxC6GyZQSbBKwWCDgWIUYWymYdBXgSPBAIOIYgZWDD4OCbwcBaAIABEYYAGKoQADLIrUBTAYAGhAEDVwksrpgCSyQAJWhRNFEphCBOQJQEgErxEylcywIbBlkHXAJXBg8AT4OsrlXHoOyq0yw6qCGBGyIwXWlkAmavCdYQCCDQUyV5a1HCQmlwJUBJQJOClZUBRo/QSZCtSAD51Bg6rCKAL9EAATBDgOsg8HwJiBVIIMBw5aBLgesXgVdV4yXD2QeBGAg5Dg+IrwGBaAey1YqEWwazGBAQAKU4QA/ToZxBWAQDBV42Aw4LBgWIQgOBXQSDCAA+r0qwIwNVAwtXq4wEFQLwEq4RC1jgCAYNWbYQyEXwIA/ACQ="));
}



Graphics.prototype.setFontDarumadropOneRegular = function () {
  // Actual height 36 (42 - 7)
  return this.setFontCustom(
    E.toString(require('heatshrink').decompress(atob('ACHwAol+Aokf4AFDg4SEgP8CQl/AokPwASEJT1wAol8G4oxEv5KEn5KEn//CIn/DAYFF/4FJgILKDoQpDBY4FDj//TIcH//gDAilEn6rFAokAC4gAah/4AohLEAoIMDAoIMDKIP/UIUDAoP+QQgSDAoQfCOwISDOwOPCQQkBBwJgBEgOAIoZ8BgIYCn4PBcAQPCj4+BgYPBh7gBHoPAEIIYC+AICB4ISBVQQPB4F/GIf+JQoABN4i9DAoSxCCQR8CCQSPDOAJDBSoYFDGQTbEar4AJRgV8KAQwBn58CJwMPSokDJYS0BBAQeB8Z2DQQYYBQQauDR4jmCDDuAcAZQBJQYACSwgVBSs8DAQMwAQMBIIM/TwMBHYMPZ4RUBg7tCv/wgZjCj5UBMYTyBBwR8CwE/PgZvBPgfgCgJ8C/AUBDAX+AoIYD4auS/bgDDoIYCn///z5CCQT5CCQUBDARICv6CCOwMfPgKkeAoabCvBmBG4U/MwQCBVYUfAQMHB4ICCPgMH4BjC/+D+E/CQICB/kPYIJmBv+DLIJcBEYKxBDAOP/AYDQQIYDPgPDDAShCDAauN/75CAoRjD/1/EgISCFoKbC/+BAocDfIKncg4wCSwQqDKIStCAoRPCOwYLENAR8DfwR8CDAf/+YYE+AYDg/gn4YCgHAEAJEDZ4ITDHAImDHASJEVwYXCLAd/DAhLCDATIDGIQGBTYk/GwQZCJQYyBYwRlDAokfDAkDSoYAYIYpvBHoYFB/kBA4J1CgJFBMQXAv5ICDAMfH4KUB/kHPgJ7CgJ8BRwOfDAIzB/+HDAcf8P+DAQCBv/nGIIbBWoSnCw7HDDAK0Dg/wHIIeBJoI5BSwU/HIK6ChBMCVAiiFn6bbPwTBEG4Z3CBgYFCKAIFDHwYFCCQQFCCQV/AoIlCLYP1Z4SHB/EfY4J0BTYbHCFoI8Ev4rBv/H/E/SoMPTYMfSoXwGQIxCnC0EgjuDKIQSBDwIABHII9BAAISBKwQSCXQSuCBYgAXaQpJBIQY8HGwimEDwQYLJIaSCDAgXBgauBh4XBg52BgaMBh4aCXwLHE8CPDj/7AoIbBTQRMDAoTgEKQZKBAoYYCJYYFFPgK5Dg5pEgB7EADMD+EPFgQ+Bh4nCRIPvOQJdEPgZXEMYZ8CCQhQB//zOwIkBBQN/EoP/g/8HAU/wP/gYYBBAN/4AYBBAMf+E/DAN/JIMfDAMf84xGVAQxCJQ7gCMYSXC//xZoQlB/E/AoRJBgIFCgEMVDsPbIY+CAoowDWgJbBWgbnEfIpjBCQauC4FgKwP+R4N8DwUD/t/CQKxBCYKuC8AgBSoX4H4KVC/w/BJgV/4KVDcAZFBCASbEAohEDMYZdEv4FEZwIFDgF+VDsHZokH+KJDgf8PAKcDz57BTgXvUQcP+YYGJQkPKIcOgIkDABQ'))),
    46,
    atob("DBkiGhobHxkbHBsbDQ=="),
    50 | 65536
  );
};

Graphics.prototype.setFontDarumadropOneRegular_small = function () {
  // Actual height 15 (16 - 2)
  return this.setFontCustom(
    E.toString(require('heatshrink').decompress(atob('AAcwgEHwAECAAkHgEB/EAv8An/Ag/wgP8gEfC4PgC4oVD8EP/8A//wj8PgPwAgWA/PwBwfgg4lCEAegkEOg+B8/4j//wP/Agf8F4JKBAAlwuEPx4xB/Eej4dHh/nwF4NoeAuEeg8B814jnnCYN4DAZUBJ4PzNwsD+BZBKwKBBAgMIAQM//ED/+AAgMAvCmHj/hgP+nEf8eB904jw2B9/wjiuBg42DgQCB/wsBSoQdBJQPHgff+EZHYMPDAN8QwqmC4DRCj0BgPhNARtDFgIBBhzzEA4J8DCYM4jnzXomABwMHxg2FvxCBQwUQj1/XoRtCd4MPRAITBUgu8NoPAAgQABA'))),
    46,
    atob("BQoNCgoLDAoLCwsLBQ=="),
    20 | 65536
  );
};

// returns the temperature from weather json, if weather is provided trough 
//android/ios .. if no temperature is available, it wont be displayed.
//(returns empty string).
function getTemperature() {
  try {
    var weatherJson = storage.readJSON('weather.json');
    var weather = weatherJson.weather;
    return "Temp: " + Math.round(weather.temp - 273.15);
  } catch (ex) {
    return "";
  }
}

const storage = require('Storage');
require("Font8x16").add(Graphics);

var IMAGEWIDTH = 176;
var IMAGEHEIGHT = 176;
var energySave = false;
var batteryLvl = E.getBattery() + "%";
var temperature = getTemperature();

// timeout used to update every minute
var drawTimeout;

// schedule a draw for the next minute
function queueDraw() 
{
  if (drawTimeout) clearTimeout(drawTimeout);
  drawTimeout = setTimeout(function () 
  {
    drawTimeout = undefined;
    draw();
  }, (energySave == true ? 60000 : 1000) - (Date.now() % (energySave == true ? 60000 : 1000)));
}


function draw() {
  
  // sometimes, when gadgetbridge sends a message, the locked event is not thrown after the messages was displayed.
  // this checks the lock state manually and set the energysave.
  if (!energySave && Bangle.isLocked()) { energySave=true; }

  var date = new Date();
  var x = 10;
  var y = 2;

  g.reset();

  //draw main background image
  g.drawImage(getKanagawa(), 0, 0);

  // only update the batterylvl and temperature every 30 seconds or every minute if energysave is on
  if (date.getSeconds() % 30 == 0) 
  {
    batteryLvl = E.getBattery() + "%";
    temperature = getTemperature();
  }

  g.setColor(g.theme.bg);
  g.setFont("8x16");
  g.drawString(temperature, 4, g.getHeight() - 40);
  g.drawString(batteryLvl, g.getWidth() - g.stringWidth(batteryLvl) - 2, y);

  // work out locale-friendly date/time
  var h = ((date.getHours() + 11) % 12 + 1);
  var m = date.getMinutes();
  var s = date.getSeconds();

  var timeStr = h.toString().padStart(2, 0) + ':' + m.toString().padStart(2, 0);
  var timeStr2 = s.toString().padStart(2, 0);

  var dateStr = require("locale").date(new Date(), 1);
  dateStr = dateStr.replace(new RegExp('/', 'g'), '.');

  var nameOfCurrentDay = require("locale").dow(date, 0).toUpperCase();

  //---Hour and minute---
  g.setColor("#000000");
  g.setFont("DarumadropOneRegular");
  g.drawString(timeStr, x, y);

  // ---Seconds---
  x += 2 + g.stringWidth(timeStr);
  y += 24;

  //only print seconds if screen is active and not locked
  if (!energySave) {
    g.setFont("DarumadropOneRegular_small");
    g.drawString(timeStr2, x, y);
  }

  // ---draw date---
  y += 45;
  g.setColor("#000000");
  g.setFont("8x16");
  g.drawString(nameOfCurrentDay, 65, y);
  y += 15;
  g.drawString(dateStr, 65, y);

  queueDraw();
}


// Stop updates when LCD is off, restart when on
Bangle.on('lock', on => {
  if (on) {
    energySave = true;
  }
  else {
    energySave = false;
  }
  draw();
});

g.clear();
draw();

// Show launcher when middle button pressed
Bangle.setUI("clock");
Bangle.loadWidgets();
try {
  require("widget_utils").swipeOn(); // hide widgets, make them visible with a swipe
}
catch (ex) {
  require("widget_utils").hide();
}
