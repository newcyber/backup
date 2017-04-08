mastamvan = document.getElementById('comments');
if (mastamvan) {
    zx = mastamvan.getElementsByTagName("p");
    for (i = 0; i < zx.length; i++) {
        if (zx.item(i).getAttribute('CLASS') == "comment-content", "emotlist") {
            mastamvan_emot = zx.item(i).innerHTML.replace(/emot0/gi, "<img src='https://raw.githubusercontent.com/mastamvan/image/master/emot.png' alt='emot0' title='Emot0' class='comment_emo'/>");
            mastamvan_emot = mastamvan_emot.replace(/emot1/gi, "<img src='https://raw.githubusercontent.com/mastamvan/image/master/emot1.png' alt='emot1' title='emot1' class='comment_emo'/>");
            mastamvan_emot = mastamvan_emot.replace(/emot2/gi, "<img src='https://raw.githubusercontent.com/mastamvan/image/master/emot2.png' alt='emot2' title='emot2' class='comment_emo'/>");
            mastamvan_emot = mastamvan_emot.replace(/emot3/gi, "<img src='https://raw.githubusercontent.com/mastamvan/image/master/emot3.png' alt='emot3' title='emot3' class='comment_emo'/>");
            mastamvan_emot = mastamvan_emot.replace(/emot4/gi, "<img src='https://raw.githubusercontent.com/mastamvan/image/master/emot4.png' alt='emot4' title='emot4' class='comment_emo'/>");
            mastamvan_emot = mastamvan_emot.replace(/emot5/gi, "<img src='https://raw.githubusercontent.com/mastamvan/image/master/emot5.png' alt='emot5' title='emot5' class='comment_emo'/>");
            mastamvan_emot = mastamvan_emot.replace(/emot6/gi, "<img src='https://raw.githubusercontent.com/mastamvan/image/master/emot6.png' alt='emot6' title='emot6' class='comment_emo'/>");
            mastamvan_emot = mastamvan_emot.replace(/emot7/gi, "<img src='https://raw.githubusercontent.com/mastamvan/image/master/emot7.png' alt='emot7' title='emot7' class='comment_emo'/>");
            mastamvan_emot = mastamvan_emot.replace(/emot8/gi, "<img src='https://raw.githubusercontent.com/mastamvan/image/master/emot8.png' alt='emot8' title='emot8' class='comment_emo'/>");
            mastamvan_emot = mastamvan_emot.replace(/emot9/gi, "<img src='https://raw.githubusercontent.com/mastamvan/image/master/emot9.png' alt='emot9' title='emot9' class='comment_emo'/>");
            mastamvan_emot = mastamvan_emot.replace(/emota0/gi, "<img src='https://raw.githubusercontent.com/mastamvan/image/master/emot10.png' alt='emota0' title='emota0' class='comment_emo'/>");
            mastamvan_emot = mastamvan_emot.replace(/emota1/gi, "<img src='https://raw.githubusercontent.com/mastamvan/image/master/emot11.png' alt='emota1' title='emota1' class='comment_emo'/>");
            mastamvan_emot = mastamvan_emot.replace(/emota2/gi, "<img src='https://raw.githubusercontent.com/mastamvan/image/master/emot12.png' alt='emota2' title='emota2' class='comment_emo'/>");
            mastamvan_emot = mastamvan_emot.replace(/emota3/gi, "<img src='https://raw.githubusercontent.com/mastamvan/image/master/emot13.png' alt='emota3' title='emota3' class='comment_emo'/>");
            mastamvan_emot = mastamvan_emot.replace(/emota4/gi, "<img src='https://raw.githubusercontent.com/mastamvan/image/master/emot14.png' alt='emota4' title='emota4' class='comment_emo'/>");
            mastamvan_emot = mastamvan_emot.replace(/emota5/gi, "<img src='https://raw.githubusercontent.com/mastamvan/image/master/emot15.png' alt='emota5' title='emota5' class='comment_emo'/>");
            mastamvan_emot = mastamvan_emot.replace(/emota6/gi, "<img src='https://raw.githubusercontent.com/mastamvan/image/master/emot16.png' alt='emota6' title='emota6' class='comment_emo'/>");
            mastamvan_emot = mastamvan_emot.replace(/emota7/gi, "<img src='https://raw.githubusercontent.com/mastamvan/image/master/emot17.png' alt='emota7' title='emota7' class='comment_emo'/>");
            mastamvan_emot = mastamvan_emot.replace(/emota8/gi, "<img src='https://raw.githubusercontent.com/mastamvan/image/master/emot18.png' alt='emota8' title='emota8' class='comment_emo'/>");
            mastamvan_emot = mastamvan_emot.replace(/emota9/gi, "<img src='https://raw.githubusercontent.com/mastamvan/image/master/emot19.png' alt='emota9' title='emota9' class='comment_emo'/>");
            mastamvan_emot = mastamvan_emot.replace(/emotb0/gi, "<img src='https://raw.githubusercontent.com/mastamvan/image/master/emot20.png' alt='emotb0' title='emotb0' class='comment_emo'/>");
            mastamvan_emot = mastamvan_emot.replace(/emotb1/gi, "<img src='https://raw.githubusercontent.com/mastamvan/image/master/emot21.png' alt='emotb1' title='emotb1' class='comment_emo'/>");
            mastamvan_emot = mastamvan_emot.replace(/emotb2/gi, "<img src='https://raw.githubusercontent.com/mastamvan/image/master/emot22.png' alt='emotb2' title='emotb2' class='comment_emo'/>");
            mastamvan_emot = mastamvan_emot.replace(/emotb3/gi, "<img src='https://raw.githubusercontent.com/mastamvan/image/master/emot23.png' alt='emotb3' title='emotb3' class='comment_emo'/>");
            mastamvan_emot = mastamvan_emot.replace(/emotb4/gi, "<img src='https://raw.githubusercontent.com/mastamvan/image/master/emot24.png' alt='emotb4' title='emotb4' class='comment_emo'/>");
            mastamvan_emot = mastamvan_emot.replace(/emotb5/gi, "<img src='https://raw.githubusercontent.com/mastamvan/image/master/emot25.png' alt='emotb5' title='emotb5' class='comment_emo'/>");
            mastamvan_emot = mastamvan_emot.replace(/emotb6/gi, "<img src='https://raw.githubusercontent.com/mastamvan/image/master/emot26.png' alt='emotb6' title='emotb6' class='comment_emo'/>");
            mastamvan_emot = mastamvan_emot.replace(/emotb7/gi, "<img src='https://raw.githubusercontent.com/mastamvan/image/master/emot27.png' alt='emotb7' title='emotb7' class='comment_emo'/>");
            mastamvan_emot = mastamvan_emot.replace(/emotb8/gi, "<img src='https://raw.githubusercontent.com/mastamvan/image/master/emot28.png' alt='emotb8' title='emotb8' class='comment_emo'/>");
            mastamvan_emot = mastamvan_emot.replace(/emotb9/gi, "<img src='https://raw.githubusercontent.com/mastamvan/image/master/emot29.png' alt='emotb9' title='emotb9' class='comment_emo'/>");
            mastamvan_emot = mastamvan_emot.replace(/emotc0/gi, "<img src='https://raw.githubusercontent.com/mastamvan/image/master/emot30.png' alt='emotc0' title='emotc0' class='comment_emo'/>");
            mastamvan_emot = mastamvan_emot.replace(/emotc1/gi, "<img src='https://raw.githubusercontent.com/mastamvan/image/master/emot31.png' alt='emotc1' title='emotc1' class='comment_emo'/>");
            mastamvan_emot = mastamvan_emot.replace(/emotc2/gi, "<img src='https://raw.githubusercontent.com/mastamvan/image/master/emot32.png' alt='emotc2' title='emotc2' class='comment_emo'/>");
            mastamvan_emot = mastamvan_emot.replace(/emotc3/gi, "<img src='https://raw.githubusercontent.com/mastamvan/image/master/emot33.png' alt='emotc3' title='emotc3' class='comment_emo'/>");
            mastamvan_emot = mastamvan_emot.replace(/emotc4/gi, "<img src='https://raw.githubusercontent.com/mastamvan/image/master/emot34.png' alt='emotc4' title='emotc4' class='comment_emo'/>");
            mastamvan_emot = mastamvan_emot.replace(/emotc5/gi, "<img src='https://raw.githubusercontent.com/mastamvan/image/master/emot35.png' alt='emotc5' title='emotc5' class='comment_emo'/>");
            mastamvan_emot = mastamvan_emot.replace(/emotc6/gi, "<img src='https://raw.githubusercontent.com/mastamvan/image/master/emot36.png' alt='emotc6' title='emotc6' class='comment_emo'/>");
            mastamvan_emot = mastamvan_emot.replace(/emotc7/gi, "<img src='https://raw.githubusercontent.com/mastamvan/image/master/emot37.png' alt='emotc7' title='emotc7' class='comment_emo'/>");
            mastamvan_emot = mastamvan_emot.replace(/emotc8/gi, "<img src='https://raw.githubusercontent.com/mastamvan/image/master/emot38.png' alt='emotc8' title='emotc8' class='comment_emo'/>");
            mastamvan_emot = mastamvan_emot.replace(/emotc9/gi, "<img src='https://raw.githubusercontent.com/mastamvan/image/master/emot39.png' alt='emotc9' title='emotc9' class='comment_emo'/>");
            mastamvan_emot = mastamvan_emot.replace(/emotd0/gi, "<img src='https://raw.githubusercontent.com/mastamvan/image/master/emot40.png' alt='emotd0' title='emotd0' class='comment_emo'/>");
            mastamvan_emot = mastamvan_emot.replace(/emotd1/gi, "<img src='https://raw.githubusercontent.com/mastamvan/image/master/emot41.png' alt='emotd1' title='emotd1' class='comment_emo'/>");
            mastamvan_emot = mastamvan_emot.replace(/emotd2/gi, "<img src='https://raw.githubusercontent.com/mastamvan/image/master/emot42.png' alt='emotd2' title='emotd2' class='comment_emo'/>");
            mastamvan_emot = mastamvan_emot.replace(/emotd3/gi, "<img src='https://raw.githubusercontent.com/mastamvan/image/master/emot43.png' alt='emotd3' title='emotd3' class='comment_emo'/>");
            mastamvan_emot = mastamvan_emot.replace(/emotd4/gi, "<img src='https://raw.githubusercontent.com/mastamvan/image/master/emot44.png' alt='emotd4' title='emotd4' class='comment_emo'/>");
            mastamvan_emot = mastamvan_emot.replace(/emotd5/gi, "<img src='https://raw.githubusercontent.com/mastamvan/image/master/emot45.png' alt='emotd5' title='emotd5' class='comment_emo'/>");
            zx.item(i).innerHTML = mastamvan_emot;
        }
    }
}