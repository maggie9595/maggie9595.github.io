/// Main Game Handling class ///
var TicTacToe = {
    /// Setting up some initial state in our class ///	  
    turn: "O",    // Keeps a record of who's turn it is
    board: ["", "", "", "", "", "", "", "", "", ""],  // Keeps a record of the TicTacToe Board using array of blanks
    win: false,		// Placeholder to record who won if the game is over; set to false if not over

    /// Clears and starts a new game with a new board ///
    restartGame: function() {
      // Draw the board in HTML ...
      var board_table = '<table align="center" border="0px" class="ttt-board"><tr><td id="ttt0"> </td><td id="ttt1"> </td><td id="ttt2"> </td></tr><tr><td id="ttt3"> </td><td id="ttt4"> </td><td id="ttt5"> </td></tr><tr><td id="ttt6"> </td><td id="ttt7"> </td><td id="ttt8"> </td></tr></table>';
			//  ... and add it to the appropriate div in HTML
      $("#ttt-board").html(board_table);

			// Hide the message at the start (not needed until end of game)
      $("#message").hide();

      // clear the board (from a previous game, if exists)
      this.board = ["", "", "", "", "", "", "", "", "", ""];

      // Add on-click events to each of the boxes of the board
      $("#ttt-board td").click(function(e) {
          TicTacToe.move( e.target.id );
         });
    },

    /// Handles clicks squares on the board ///
    move: function(id) {
      // Board square table element
      var square = $("#" + id);

      // Get the number representing the square on the board
      var num = id.replace("ttt", "");

      // If no one's in this square and the game isn't over, go there and plant the flag for X or O
      if (!this.board[num] && !this.win) {
        // Add the X or O
        square.html( this.turn );
        // Update the board array so we can later check to see if a win or not
        this.board[num] = this.turn;
        // End the turn
        this.nextTurn();
      }
    },

    

    /// Iterate turn and check if anyone won yet ///
    nextTurn: function() {
			// Alternate turns (if O then set it to X and vice-versa)
      this.turn = (this.turn == "O") ? "X" : "O";

			// Check for a win to see if we need to continue
      this.win = this.check4Win();
      if (this.win) {
        this.endGame();
      }
    },

    /// Display who won and options for new games ///
    endGame: function() {
			// Print out the winner in the message div (or Cat's Game if no winner)
      if(this.win == "cat") {
          $("#message").html("Cat's Game.");
      } else {
          $("#message").html(this.win + " wins!");
      }

			// Append the 'Play Again' option to the message
      $("#message").append("<div id='play_again'>Play Again</div>");

      // Button for playing again connected to restartGame()
      $("#play_again").click(function () { TicTacToe.restartGame(); });
			// Show the message (was hidden)
			$("#message").show();
			
      // Reset win to false
      this.win = false;

    },

		/// Add to our state all the possible win patterns (joy of TTT is there is only 8 win possibilities)
    /// If any of these patterns of board squares have all X's or all O's then we know somebody won ///
    wins: [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [6,4,2]],

    /// Check for whether someone won the game of it was a Cat's game. ///
    check4Win: function() {
      // Loop through all possible winning combinations defined above
      for (k in this.wins){
        var pattern = this.wins[k];
        var p = this.board[pattern[0]] + this.board[pattern[1]] + this.board[pattern[2]];
        if (p == "XXX") {
          return "X"; // if "XXX", then X won the game, so return 'X'
        } else if (p == "OOO") {
          return "O"; // if "OOO", then O won the game, so return "O"
        }
		  }

      // If no winner is declared, check to see if all the squares are filled or not.
      // If all the squares in the board are filled, then it's considered a Cat's game (no winner)
      var count = 0;
      for (s in this.board) {
        if (this.board[s]) { count+=1; }
      }
      if (count == 9) {
        return "cat";   // Cat's game (no winner)
      } else {
        return false;   // this.win is set to false already on L5, but nice to have a formal return of false
      }

    }

  }; // End of TicTacToe class

  /// Time to start using this class.  Once the DOM is loaded, ///
	/// we will start a game using the restartGame method  ///
   $(document).ready(function() {

       // Using the restartGame method to start a new game
       TicTacToe.restartGame();
   });