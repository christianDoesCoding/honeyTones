import { useState, useEffect } from 'react';


//logic where songs are chosen in coordinance with colors

//possibly consider spotify without an account

//Create an object where key is associated with the color shade. If disliked, it will have an alternative song to pull up that's more epitomizing of that shade

// regular shades get key 'i', light shades get 'ia', dark shades get 'ib'// added as properties for accessibility
    const firstObj = {
            //original
        '0': 'https://www.youtube.com/watch?v=1wXqIuUGPbE&ab_channel=AlvinAlkatib',
        '1': 'url',
        '2': 'https://www.youtube.com/watch?v=CF2oeHBHdl4&ab_channel=SauceOnly',
        '3': 'https://www.youtube.com/watch?v=5i1nsRb6aKo&ab_channel=RudeRecords',
        '4': 'https://www.youtube.com/watch?v=Fcd8UbutjIg&ab_channel=BillieEilishVEVO',
        '5': 'https://www.youtube.com/watch?v=Ndf-eMyEVG8&ab_channel=MacMiller',
        '6': 'https://www.youtube.com/watch?v=aVbbw1JQZiA&ab_channel=TheRoyalBee',
        '7': 'https://www.youtube.com/watch?v=0xGPi-Al3zQ&ab_channel=FleetwoodMac-Topic',
        '8': 'https://www.youtube.com/watch?v=C62ApusprBA&ab_channel=FINNEAS',
        '9': 'https://www.youtube.com/results?search_query=joji+afterthought',
        '10': 'https://www.youtube.com/watch?v=78DVtcsT26k&ab_channel=GlassAnimalsVEVO',
        '11': 'https://www.youtube.com/watch?v=6TbAn5t5u0k&ab_channel=EqualVisionRecords',
        '12': 'https://www.youtube.com/watch?v=P3cffdsEXXw',
        '13': 'https://www.youtube.com/watch?v=8J3UIIn1X1k&ab_channel=iamjakehill',
        '14': 'oops not that color :)',
        '15': 'https://www.youtube.com/watch?v=2D_yEiCYj70&ab_channel=TripleCrownRecords',
        '16': 'https://www.youtube.com/watch?v=aT2Nm4fYmI4&ab_channel=ShaneNicole',
        '17': 'https://www.youtube.com/watch?v=ZcDxk9CSTo8&ab_channel=Hozier',
        '18': 'https://www.youtube.com/watch?v=Y3ywicffOj4&ab_channel=FleetwoodMac',
        '19': 'oops not that color :)',
        '20': 'https://www.youtube.com/watch?v=QtH4CK4LWRU&ab_channel=TheDearHunter-Topic',
        '21': 'oops not that color :)',
        '22': 'oops not that color :)',
        '23': 'https://www.youtube.com/watch?v=ChIVsNgzaAo&ab_channel=YellowDaysVEVO',
        '24': 'https://www.youtube.com/watch?v=gXq_J29V5Io&ab_channel=HozierVEVO',
        '25': 'oops not that color :)',
        '26': 'oops not that color :)',
        '27': 'oops not that color :)',
        '28': 'oops not that color :)',
        '29': 'https://www.youtube.com/watch?v=0v2nhMQmntE&ab_channel=AppleMusic',
        '30': 'oops not that color :)',
        '31': 'oops not that color :)',
        '32': 'oops not that color :)',
        '33': 'oops not that color :)',
        '34': 'oops not that color :)',
        '35': 'oops not that color :)',
        '36': 'oops not that color :)',
        '37': 'oops not that color :)',
        '38': 'https://www.youtube.com/watch?v=Tw0Ep00s6As&ab_channel=melodicmotion',
        '39': 'https://www.youtube.com/watch?v=hG4lT4fxj8M&ab_channel=BillieEilishVEVO',
        '40': 'oops not that color :)',
        '41': 'oops not that color :)',
        '42': 'oops not that color :)',
        '43': 'https://www.youtube.com/watch?v=j_KAlIVNtHo&ab_channel=MacMiller',
        '44': 'https://www.youtube.com/watch?v=6EaLlR50mmg&ab_channel=PolarRecords',
        '45': 'https://www.youtube.com/watch?v=zGli_7I-pqQ&ab_channel=iamjakehill',
        '46': 'oops not that color :)',
        '47': 'oops not that color :)',
        '48': 'oops not that color :)',
        '49': 'oops not that color :)',
        '50': 'oops not that color :)',
        '51': 'oops not that color :)',
        '52': 'oops not that color :)',
        '53': 'https://www.youtube.com/watch?v=FU2g5gT3myA&ab_channel=Yebba',
        '54': 'https://www.youtube.com/watch?v=kmWD11b4wQc&ab_channel=BlueWednesday-Topic',
        '55': 'oops not that color :)',
        '56': 'https://www.youtube.com/watch?v=E1iwrfgNOUU&ab_channel=88rising',
        '57': 'oops not that color :)',
        '58': 'oops not that color :)',
        '59': 'https://www.youtube.com/watch?v=X2kPLQEFR6Y&ab_channel=COLORS',
        '60': 'https://www.youtube.com/watch?v=aY7os8Qms6w&ab_channel=DemiLovato',
        '61': 'https://www.youtube.com/watch?v=0mHPrkhE_Tg&ab_channel=PixlNetworks',
        '62': 'https://www.youtube.com/watch?v=QYh6mYIJG2Y&ab_channel=ArianaGrandeVevo',
        '63': 'https://www.youtube.com/watch?v=TFrMDGfW_Sg&ab_channel=ArianaGrandeVevo',
        '64': 'https://www.youtube.com/watch?v=qa0DPly8OGc&list=RDGMEMQ1dJ7wXfLlqCjwV0xfSNbA&start_radio=1&ab_channel=MariahCareyLambily',
        '65': 'oops not that color :)',
        '66': 'oops not that color :)',
        '67': 'oops not that color :)',
        '68': 'oops not that color :)',
            //light colors
        '1a': 'https://www.youtube.com/watch?v=KGmJ8E9SZz8&ab_channel=Pentatonix-Topic',
        '2a': 'https://www.youtube.com/watch?v=ph_X7RFPfNA&list=RDGMEMQ1dJ7wXfLlqCjwV0xfSNbA&index=4&ab_channel=ArianaGrandeVevo',
        '3a': 'https://www.youtube.com/watch?v=inJwkX4jYrU&ab_channel=Pentatonix-Topic',
        '4a': 'https://www.youtube.com/watch?v=mr0fJ7o00UY&ab_channel=KelvinHallett',
        '5a': 'https://www.youtube.com/watch?v=5MHd28VJo_M&ab_channel=TripleCrownRecords',
        '6a': 'url',
        '7a': 'https://www.youtube.com/watch?v=nSv5v-3n4rs&ab_channel=DearHunterFan15',
        '8a': 'url',
        '9a': 'url',
        '10a': 'url',
        '11a': 'url',
        '12a': 'url',
        '13a': 'url',
        '14a': 'url',
        '15a': 'url',
        '16a': 'url',
        '17a': 'https://www.youtube.com/watch?v=0HSEBCU_fR4&ab_channel=88rising',
        '18a': 'url',
        '19a': 'https://www.youtube.com/watch?v=HF9yzbMxTXM&ab_channel=EpidemicChillBeats',
        '20a': 'url',
        '21a': 'https://www.youtube.com/watch?v=_uK60pOWHcM&ab_channel=wasteland%2Cbaby2.0',
        '22a': 'url',
        '23a': 'https://www.youtube.com/watch?v=uCGD9dT12C0&ab_channel=FleetwoodMac',
        '24a': 'https://www.youtube.com/watch?v=tJ_dpxz2lcc&ab_channel=COLORS',
        '25a': 'url',
        '26a': 'url',
        '27a': 'url',
        '28a': 'url',
        '29a': 'url',
        '30a': 'url',
        '31a': 'url',
        '32a': 'url',
        '33a': 'url',
        '34a': 'https://www.youtube.com/watch?v=H6g33G_QhZQ&ab_channel=BlueWednesday-Topic',
        '35a': 'https://www.youtube.com/watch?v=So51xYgkzMo&ab_channel=Pentatonix',
        '36a': 'url',
        '37a': 'https://www.youtube.com/watch?v=Rhws4aEgXQc&ab_channel=EqualVisionRecords',
        '38a': 'https://www.youtube.com/watch?v=z5B6E1einFw&ab_channel=ChillhopMusic',
        '39a': 'https://www.youtube.com/watch?v=hYhIqVKtUL4&ab_channel=ArianaGrande',
        '40a': 'https://www.youtube.com/watch?v=SsKT0s5J8ko&ab_channel=MacMiller',
        '41a': 'https://www.youtube.com/watch?v=k8nVVgvq0bE&ab_channel=iamjakehill',
        '42a': 'url',
        '43a': 'url',
        '44a': 'https://www.youtube.com/watch?v=OjHAOvR8kps&ab_channel=dojacatVEVO',
        '45a': 'url',
        '46a': 'https://www.youtube.com/watch?v=8f2SPsLxPzQ&ab_channel=MacMiller',
        '47a': 'https://www.youtube.com/watch?v=6sd1hXJwz7U&ab_channel=BlueWednesday-Topic',
        '48a': 'url',
        '49a': 'url',
        '50a': 'url',
        '51a': 'https://www.youtube.com/watch?v=oKL0erZSAdM&ab_channel=Joji-Topic',
        '52a': 'url',
        '53a': 'url',
        '54a': 'url',
        '55a': 'url',
        '56a': 'url',
        '57a': 'url',
        '58a': 'url',
        '59a': 'https://www.youtube.com/watch?v=4oviKWgwzE4&ab_channel=88-Keys',
        '60a': 'https://www.youtube.com/watch?v=uKqRAC-JNOM&ab_channel=ArianaGrandeVevo',
        '61a': 'https://www.youtube.com/watch?v=FTuoatCXigM&ab_channel=DavidDeanBurkhart',
        '62a': 'https://www.youtube.com/watch?v=OjHAOvR8kps&ab_channel=dojacatVEVO',
        '63a': 'url',
        '64a': 'url',
        '65a': 'url',
        '66a': 'url',
        '67a': 'url',
        '68a': 'url',
            //darkColors
        '1b': 'url',
        '2b': 'https://www.youtube.com/watch?v=jeo3an2M_Lo&ab_channel=GlassAnimals',
        '3b': 'https://www.youtube.com/watch?v=_YOvQNgpfXY&ab_channel=COLORS',
        '4b': 'https://www.youtube.com/watch?v=PFX08ssSsLI&ab_channel=TripleCrownRecords',
        '5b': 'https://www.youtube.com/watch?v=hph8xZTq2ZY&ab_channel=NatKingCole-Topic',
        '6b': 'https://www.youtube.com/watch?v=4zAThXFOy2c&ab_channel=ChrisStapletonVEVO',
        '7b': 'url',
        '8b': 'url',
        '9b': 'url',
        '10b': 'url',
        '11b': 'https://www.youtube.com/watch?v=dTCwpNQ5_7A&ab_channel=PuppaFrass',
        '12b': 'url',
        '13b': 'https://www.youtube.com/watch?v=7QuRdpqGTX4&ab_channel=BlueWednesday-Topic',
        '14b': 'https://www.youtube.com/watch?v=V-kT1oGCRCE&ab_channel=FINNEAS',
        '15b': 'https://www.youtube.com/watch?v=chwVPXXJEzI&ab_channel=B%C3%98RNS-Topic',
        '16b': 'url',
        '17b': 'https://www.youtube.com/watch?v=WM7-PYtXtJM&ab_channel=FleetwoodMac',
        '18b': 'url',
        '19b': 'url',
        '20b': 'https://www.youtube.com/watch?v=49M1O2YgDfE&ab_channel=GlassAnimalsVEVO',
        '21b': 'https://www.youtube.com/watch?v=N4rKN_qW5DU&ab_channel=HozierVEVO',
        '22b': 'url',
        '23b': 'url',
        '24b': 'https://www.youtube.com/watch?v=_nnj2yM7Tb4&ab_channel=chickeechick24',
        '25b': 'url',
        '26b': 'url',
        '27b': 'https://www.youtube.com/watch?v=UXhSkL6yyoQ&ab_channel=ChillhopMusic',
        '28b': 'https://www.youtube.com/watch?v=EtRIz7VocNs&list=RDGMEMQ1dJ7wXfLlqCjwV0xfSNbA&index=6&ab_channel=Mahogany',
        '29b': 'url',
        '30b': 'https://www.youtube.com/watch?v=M-MGpJIo2bs&ab_channel=CCMAOfficial',
        '31b': 'https://www.youtube.com/watch?v=kt35LvQNbD4&ab_channel=Tidin',
        '32b': 'url',
        '33b': 'https://www.youtube.com/watch?v=DSbqyWXVDYg&ab_channel=COLORS',
        '34b': 'url',
        '35b': 'https://www.youtube.com/watch?v=RVdCZSCymJM&ab_channel=DarkCitySounds',
        '36b': 'https://www.youtube.com/watch?v=PEBS2jbZce4&ab_channel=88rising',
        '37b': 'url',
        '38b': 'https://www.youtube.com/watch?v=tNXr3apQC5w&ab_channel=ChillOnly',
        '39b': 'https://www.youtube.com/watch?v=DUndsZwD8lw&ab_channel=RapCity',
        '40b': 'https://www.youtube.com/watch?v=HjmBLCbTgDo&ab_channel=FINNEAS',
        '41b': 'url',
        '42b': 'url',
        '43b': 'https://www.youtube.com/watch?v=chwVPXXJEzI&ab_channel=B%C3%98RNS-Topic',
        '44b': 'url',
        '45b': 'url',
        '46b': 'url',
        '47b': 'url',
        '48b': 'https://www.youtube.com/watch?v=EgBJmlPo8Xw&list=RDGMEMQ1dJ7wXfLlqCjwV0xfSNbA&index=12&ab_channel=BillieEilishVEVO',
        '49b': 'url',
        '50b': 'url',
        '51b': 'url',
        '52b': 'uhttps://www.youtube.com/watch?v=AMzjbyZhM5U&ab_channel=THUMPrl',
        '53b': 'https://www.youtube.com/watch?v=potq6EfzFTI&ab_channel=HozierVEVO',
        '54b': 'https://www.youtube.com/watch?v=yumnkZKCxh8&ab_channel=GlassAnimalsVEVO',
        '55b': 'https://www.youtube.com/watch?v=FmvTyNWB9l4&ab_channel=DavidDeanBurkhart',
        '56b': 'url',
        '57b': 'url',
        '58b': 'url',
        '59b': 'https://www.youtube.com/watch?v=NqaKrfX3uWk&ab_channel=Blossom',
        '60b': 'https://www.youtube.com/watch?v=pzeefqfSMjY&ab_channel=GlassAnimals-Topic',
        '61b': 'https://www.youtube.com/watch?v=Y1DGjhoiq-4&ab_channel=TheDearHunter-Topic',
        '62b': 'https://www.youtube.com/watch?v=Cpmxy5mE6tY&ab_channel=Pentatonix',
        '63b': 'url',
        '64b': 'url',
        '65b': 'https://www.youtube.com/watch?v=YQ-qToZUybM&list=RDGMEMQ1dJ7wXfLlqCjwV0xfSNbA&index=16&ab_channel=TheWeekndVEVO',
        '66b': 'url',
        '67b': 'url',
        '68b': 'url',
            //lightRow2
        '7c': 'https://www.youtube.com/watch?v=tU_ZB_0eX2I&ab_channel=AtlanticRecords',
        '8c': 'https://www.youtube.com/watch?v=mwgg1Pu6cNg&ab_channel=FleetwoodMac',
        '9c': 'https://www.youtube.com/watch?v=7OopD1mdbL8&ab_channel=YellowDays-Topic',
        '10c': 'https://www.youtube.com/watch?v=NjuiM8Rb2Iw&ab_channel=MacMiller',
        '11c': 'https://www.youtube.com/watch?v=qPeO2qEZxbk&ab_channel=Pentatonix-Topic',
        '12c': 'https://www.youtube.com/watch?v=uL52DajINdY&list=RDGMEMQ1dJ7wXfLlqCjwV0xfSNbA&index=23&ab_channel=ArianaGrandeVevo',
        '13c': 'https://www.youtube.com/watch?v=XR6B8N9Xxng&ab_channel=Pentatonix-Topic',
        '14c': 'https://www.youtube.com/watch?v=ZmTMX947P1E&ab_channel=ElliotMoss-Topic',
        '15c': 'https://www.youtube.com/watch?v=cT1Kzk7akjQ&ab_channel=PentatonixVEVO',
        '16c': 'url',
            //lightRow3
        '6d': 'url',
        '7d': 'url',
        '8d': 'https://www.youtube.com/watch?v=S2dRcipMCpw&list=RDGMEMQ1dJ7wXfLlqCjwV0xfSNbA&index=27&ab_channel=BillieEilishVEVO',
        '9d': 'https://www.youtube.com/watch?v=8GGGliIxpgc&ab_channel=COLORS',
        '10d': 'https://www.youtube.com/watch?v=sKm4YqadSGw&list=RDGMEMQ1dJ7wXfLlqCjwV0xfSNbA&index=13&ab_channel=ArianaGrandeVevo',
        '11d': 'https://www.youtube.com/watch?v=Qfm6nfz1QNQ&ab_channel=TheVibeGuide',
        '12d': 'https://www.youtube.com/watch?v=VaKzNtwPQxE&ab_channel=FINNEAS',
        '13d': 'url',
        '14d': 'https://www.youtube.com/watch?v=Q-NUaixkovQ&ab_channel=MacMiller',
            //lightRow4
        '5e': 'url',
        '6e': 'url',
        '7e': 'https://www.youtube.com/watch?v=aPoUkJnu7DM&ab_channel=TripleCrownRecords',
        '8e': 'url',
        '9e': 'https://www.youtube.com/watch?v=cI0wUoCLnLk&ab_channel=HozierVEVO',
        '10e': 'https://www.youtube.com/watch?v=eBAHqRnSgRw&ab_channel=ArianaGrandeVevo',
        '11e': 'url',
        '12e': 'url',
            //darkRow2
        '44f': 'url',
        '45f': 'url',
        '46f': 'https://www.youtube.com/watch?v=e6LM0sIA_Eg&ab_channel=HozierVEVO',
        '47f': 'https://www.youtube.com/watch?v=_O1qD95xnao&ab_channel=MacMiller',
        '48f': 'url',
        '49f': 'https://www.youtube.com/watch?v=xB_K5O33WcQ&ab_channel=iamjakehill',
        '50f': 'https://www.youtube.com/watch?v=3upr1DZhv04&ab_channel=BingoCS',
        '51f': 'https://www.youtube.com/watch?v=bN3u3h3AkGo&ab_channel=iamjakehill',
        '52f': 'https://www.youtube.com/watch?v=EONxxLEIg58&ab_channel=%EF%BC%B4%EF%BC%B2%EF%BC%A1%EF%BC%B3%EF%BC%A8%E6%96%B0%E3%83%89%E3%83%A9%E3%82%B4%E3%83%B3',
        '53f': 'https://www.youtube.com/watch?v=tVAYzn2h1bQ&list=RDGMEMQ1dJ7wXfLlqCjwV0xfSNbA&index=11&ab_channel=KadeMcCuen',
            //darkRow3
        '46g': 'https://www.youtube.com/watch?v=PP9yq1L62I4&ab_channel=TripleCrownRecords',
        '47g': 'https://www.youtube.com/watch?v=HZgiAgYXneE&ab_channel=Equilanora',
        '48g': 'https://www.youtube.com/watch?v=3o_MTa4wUBg&ab_channel=LYRICS',
        '49g': 'https://www.youtube.com/watch?v=W4ocPPhtglU&ab_channel=MacMiller',
        '50g': 'https://www.youtube.com/watch?v=FX3AY8SeUpo&ab_channel=TripleCrownRecords',
        '51g': 'https://www.youtube.com/watch?v=skHbZBsS7hM&ab_channel=BillieEilishVEVO',
        '52g': 'https://www.youtube.com/watch?v=K7ZQQRLBdJ8&ab_channel=ElliotMoss-Topic',
        '53g': 'url',
        '54g': 'url',
            //darkRow4
        '48h': 'url',
        '49h': 'url',
        '50h': 'url',
        '51h': 'url',
        '52h': 'https://www.youtube.com/watch?v=V4BFGSZ_1ls&ab_channel=MacMiller',
        '53h': 'https://www.youtube.com/watch?v=sp7PS_UN8Lo&ab_channel=Pentatonix',
        '54h': 'https://www.youtube.com/watch?v=5VY42z6FB1M&ab_channel=ElliotMoss-Topic',
        '55h': 'https://www.youtube.com/watch?v=RPZxHFbX0QQ&ab_channel=ElliotMoss',
    }

//when button is clicked, it will open a new page in a new tab 
//upon returning back to screen, message will pop up asking for feedback


//create a GET request, where once button is clicked, it will lead to /links, and fromt there it will search for coordinating url, then redirect to page


export default firstObj;