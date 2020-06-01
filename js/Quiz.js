class Quiz {
    constructor() {

    }

    display() {
        
        var answers = [];

        var marks = 0;

        var land1 = 0;
        var land2 = 0;
        var land3 = 0;
        var land4 = 0;
        
        var introTitle = createElement("h1");
        introTitle.html("Welcome to my Quiz");
        introTitle.position(displayWidth - 850, displayHeight - 700);
        
        var nameInput = createInput("What is your name ??");
        nameInput.position(displayWidth - 800, displayHeight - 500);

        var introButton = createButton("SUBMIT");
        introButton.position(displayWidth - 750, displayHeight - 480);

        var q1 = createElement("h2");
        q1.html("How do you identify a Pit Viper (Species of Snake)");
        q1.position(displayWidth - 850, displayHeight - 700);
        q1.hide();

        var q1AButton1 = createButton("By the increased length of the snake");
        q1AButton1.position(displayWidth - 1000, displayHeight - 500);
        q1AButton1.hide();

        var q1AButton2 = createButton("By the holes on each side in between the nostrils and the eyes");
        q1AButton2.position(displayWidth - 600, displayHeight - 500);
        q1AButton2.hide();

        var q1AButton3 = createButton("By its body design");
        q1AButton3.position(displayWidth - 1000, displayHeight - 400);
        q1AButton3.hide();

        var q1AButton4 = createButton("By its thickness");
        q1AButton4.position(displayWidth - 600, displayHeight - 400);
        q1AButton4.hide();

        var q2 = createElement("h2");
        q2.html("How do we identify most of the venomous snake species");
        q2.position(displayWidth - 950, displayHeight - 700);
        q2.hide();

        var q2AButton1 = createButton("By their fourth tongue");
        q2AButton1.position(displayWidth - 1000, displayHeight - 500);
        q2AButton1.hide();

        var q2AButton2 = createButton("All of them are venomous");
        q2AButton2.position(displayWidth - 600, displayHeight - 500);
        q2AButton2.hide();

        var q2AButton3 = createButton("With its bright color");
        q2AButton3.position(displayWidth - 1000, displayHeight - 400);
        q2AButton3.hide();

        var q2AButton4 = createButton("With the shape of its pupil");
        q2AButton4.position(displayWidth - 600, displayHeight - 400);
        q2AButton4.hide();

        var q3 = createElement("h2");
        q3.html("How do we differentiate between a gecko and a lizard");
        q3.position(displayWidth - 950, displayHeight - 700);
        q3.hide();

        var q3AButton1 = createButton("Lizards have movable eyelids");
        q3AButton1.position(displayWidth - 1000, displayHeight - 500);
        q3AButton1.hide();

        var q3AButton2 = createButton("Geckos and lizards are the same");
        q3AButton2.position(displayWidth - 600, displayHeight - 500);
        q3AButton2.hide();

        var q3AButton3 = createButton("Lizards have a different size than that of a gecko");
        q3AButton3.position(displayWidth - 1000, displayHeight - 400);
        q3AButton3.hide();

        var q3AButton4 = createButton("With the marking on its body");
        q3AButton4.position(displayWidth - 600, displayHeight - 400);
        q3AButton4.hide();

        var q4 = createElement("h2");
        q4.html("How do we differentiate between a crocodile and an alligator");
        q4.position(displayWidth - 950, displayHeight - 700);
        q4.hide();

        var q4AButton1 = createButton("Crocodiles have external ears");
        q4AButton1.position(displayWidth - 1000, displayHeight - 500);
        q4AButton1.hide();

        var q4AButton2 = createButton("Crocodiles are longer");
        q4AButton2.position(displayWidth - 600, displayHeight - 500);
        q4AButton2.hide();

        var q4AButton3 = createButton("Alligators have broad snouts");
        q4AButton3.position(displayWidth - 1000, displayHeight - 400);
        q4AButton3.hide();

        var q4AButton4 = createButton("They are literally the same");
        q4AButton4.position(displayWidth - 600, displayHeight - 400);
        q4AButton4.hide();

        var endingText = createElement("h2");
        endingText.html("Great, you completed the quiz and now here are you marks");
        endingText.position(displayWidth - 980, displayHeight - 700);
        endingText.hide();

        var bonusQ = createElement("h2");
        bonusQ.html("Now, what kind of quiz do you think this is (use the puzzle if neccessary) ?");
        bonusQ.position(displayWidth - 900, displayHeight - 600);
        bonusQ.hide();

        var bonusQAButton1 = createButton("Mammalian quiz");
        bonusQAButton1.position(displayWidth - 800, displayHeight - 400);
        bonusQAButton1.hide();

        var bonusQAButton2 = createButton("Reptilian quiz");
        bonusQAButton2.position(displayWidth - 400, displayHeight - 400);
        bonusQAButton2.hide();

        var bonusQAButton3 = createButton("Amphibian quiz");
        bonusQAButton3.position(displayWidth - 800, displayHeight - 300);
        bonusQAButton3.hide();

        var bonusQAButton4 = createButton("Bird quiz");
        bonusQAButton4.position(displayWidth - 400, displayHeight - 300);
        bonusQAButton4.hide();

        introButton.mousePressed(function() {
            introTitle.hide();
            nameInput.hide();
            introButton.hide();

            var names = nameInput.value();

            q1.show();
            q1AButton1.show();
            q1AButton2.show();
            q1AButton3.show();
            q1AButton4.show();
        })

        q1AButton1.mousePressed(function() {
            q1.hide();
            q1AButton1.hide();
            q1AButton2.hide();
            q1AButton3.hide();
            q1AButton4.hide();

            q2.show();
            q2AButton1.show();
            q2AButton2.show();
            q2AButton3.show();
            q2AButton4.show();
        })

        q1AButton2.mousePressed(function() {
            q1.hide();
            q1AButton1.hide();
            q1AButton2.hide();
            q1AButton3.hide();
            q1AButton4.hide();

            q2.show();
            q2AButton1.show();
            q2AButton2.show();
            q2AButton3.show();
            q2AButton4.show();

            marks++;

            land1 += 1;
        })

        q1AButton3.mousePressed(function() {
            q1.hide();
            q1AButton1.hide();
            q1AButton2.hide();
            q1AButton3.hide();
            q1AButton4.hide();

            q2.show();
            q2AButton1.show();
            q2AButton2.show();
            q2AButton3.show();
            q2AButton4.show();
        })

        q1AButton4.mousePressed(function() {
            q1.hide();
            q1AButton1.hide();
            q1AButton2.hide();
            q1AButton3.hide();
            q1AButton4.hide();

            q2.show();
            q2AButton1.show();
            q2AButton2.show();
            q2AButton3.show();
            q2AButton4.show();
        })

        q2AButton1.mousePressed(function() {
            q2.hide();
            q2AButton1.hide();
            q2AButton2.hide();
            q2AButton3.hide();
            q2AButton4.hide();

            q3.show();
            q3AButton1.show();
            q3AButton2.show();
            q3AButton3.show();
            q3AButton4.show();
        })

        q2AButton2.mousePressed(function() {
            q2.hide();
            q2AButton1.hide();
            q2AButton2.hide();
            q2AButton3.hide();
            q2AButton4.hide();

            q3.show();
            q3AButton1.show();
            q3AButton2.show();
            q3AButton3.show();
            q3AButton4.show();
        })

        q2AButton3.mousePressed(function() {
            q2.hide();
            q2AButton1.hide();
            q2AButton2.hide();
            q2AButton3.hide();
            q2AButton4.hide();

            q3.show();
            q3AButton1.show();
            q3AButton2.show();
            q3AButton3.show();
            q3AButton4.show();
        })

        q2AButton4.mousePressed(function() {
            q2.hide();
            q2AButton1.hide();
            q2AButton2.hide();
            q2AButton3.hide();
            q2AButton4.hide();

            q3.show();
            q3AButton1.show();
            q3AButton2.show();
            q3AButton3.show();
            q3AButton4.show();

            marks++;

            land2 += 1;
        })

        q3AButton1.mousePressed(function() {
            q3.hide();
            q3AButton1.hide();
            q3AButton2.hide();
            q3AButton3.hide();
            q3AButton4.hide();

            q4.show();
            q4AButton1.show();
            q4AButton2.show();
            q4AButton3.show();
            q4AButton4.show();

            marks++;

            land3 += 1;
        })

        q3AButton2.mousePressed(function() {
            q3.hide();
            q3AButton1.hide();
            q3AButton2.hide();
            q3AButton3.hide();
            q3AButton4.hide();

            q4.show();
            q4AButton1.show();
            q4AButton2.show();
            q4AButton3.show();
            q4AButton4.show();
        })

        q3AButton3.mousePressed(function() {
            q3.hide();
            q3AButton1.hide();
            q3AButton2.hide();
            q3AButton3.hide();
            q3AButton4.hide();

            q4.show();
            q4AButton1.show();
            q4AButton2.show();
            q4AButton3.show();
            q4AButton4.show();
        })

        q3AButton4.mousePressed(function() {
            q3.hide();
            q3AButton1.hide();
            q3AButton2.hide();
            q3AButton3.hide();
            q3AButton4.hide();

            q4.show();
            q4AButton1.show();
            q4AButton2.show();
            q4AButton3.show();
            q4AButton4.show();
        })

        q4AButton1.mousePressed(function() {
            q4.hide();
            q4AButton1.hide();
            q4AButton2.hide();
            q4AButton3.hide();
            q4AButton4.hide();

            endingText.show();
            
            fill("black");
            textSize(200);
            text(marks + "/4", displayWidth - 840, displayHeight - 370);

            peopleCount++;
            people.update(marks);
            people.updateCount(peopleCount);
        })

        q4AButton2.mousePressed(function() {
            q4.hide();
            q4AButton1.hide();
            q4AButton2.hide();
            q4AButton3.hide();
            q4AButton4.hide();

            endingText.show();
            
            fill("black");
            textSize(200);
            text(marks + "/4", displayWidth - 840, displayHeight - 370);

            peopleCount++;
            people.update(marks);
            people.updateCount(peopleCount);
        })

        q4AButton3.mousePressed(function() {
            q4.hide();
            q4AButton1.hide();
            q4AButton2.hide();
            q4AButton3.hide();
            q4AButton4.hide();

            marks++;

            endingText.show();

            land4 += 1

            if(land1 !== null && land2 !== null && land3 !== null && land4 !== null) {
                endingText.hide();

                var lizard = createSprite(displayWidth - 1180, displayHeight - 475, 50, 50);
                lizard.addImage("lizardE", lizardImg);
                bonusQ.show();
                bonusQAButton1.show();
                bonusQAButton2.show();
                bonusQAButton3.show();
                bonusQAButton4.show();

                bonusQAButton1.mousePressed(function() {
                    endingText.show();

                    bonusQ.hide();
                    bonusQAButton1.hide();
                    bonusQAButton2.hide();
                    bonusQAButton3.hide();
                    bonusQAButton4.hide();

                    fill("black");
                    textSize(200);
                    text(marks + "/4", displayWidth - 840, displayHeight - 370);

                    peopleCount++;
                    people.update(marks);
                    people.updateCount(peopleCount);
                })

                bonusQAButton2.mousePressed(function() {
                    endingText.show();
                    
                    bonusQ.hide();
                    bonusQAButton1.hide();
                    bonusQAButton2.hide();
                    bonusQAButton3.hide();
                    bonusQAButton4.hide();

                    marks++;

                    fill("black");
                    textSize(200);
                    text(marks + "/4", displayWidth - 840, displayHeight - 370);

                    peopleCount++;
                    people.update(marks);
                    people.updateCount(peopleCount);
                })

                bonusQAButton3.mousePressed(function() {
                    endingText.show();
                    
                    bonusQ.hide();
                    bonusQAButton1.hide();
                    bonusQAButton2.hide();
                    bonusQAButton3.hide();
                    bonusQAButton4.hide();

                    fill("black");
                    textSize(200);
                    text(marks + "/4", displayWidth - 840, displayHeight - 370);

                    peopleCount++;
                    people.update(marks);
                    people.updateCount(peopleCount);
                })

                bonusQAButton4.mousePressed(function() {
                    endingText.show();
                    
                    bonusQ.hide();
                    bonusQAButton1.hide();
                    bonusQAButton2.hide();
                    bonusQAButton3.hide();
                    bonusQAButton4.hide();

                    fill("black");
                    textSize(200);
                    text(marks + "/4", displayWidth - 840, displayHeight - 370);

                    peopleCount++;
                    people.update(marks);
                    people.updateCount(peopleCount);
                })
            }
        })

        q4AButton4.mousePressed(function() {
            q4.hide();
            q4AButton1.hide();
            q4AButton2.hide();
            q4AButton3.hide();
            q4AButton4.hide();

            endingText.show();
            
            fill("black");
            textSize(200);
            text(marks + "/4", displayWidth - 840, displayHeight - 370);

            peopleCount++;
            people.update(marks);
            people.updateCount(peopleCount);
        })

        drawSprites();
    }
}