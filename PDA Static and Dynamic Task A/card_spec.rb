require("minitest/autorun")
require("minitest/rg")

require_relative("card.rb")
require_relative("testing_task_2.rb")

class CardGameTest < MiniTest::Test

def setup()
@cardgame = CardGame.new()

@card1 = Card.new('spades',1)
@card2 = Card.new('hearts',9)
@card3 = Card.new('clubs',13)
@card4 = Card.new('diamonds',7)

@cards =[@card1,@card2,@card3,@card4]
end

def test_card_1_has_value
  assert_equal(1,@card1.value)
end

def test_card_1_has_suit
  assert_equal('spades',@card1.suit)
end

def test_card_2_has_value
  assert_equal(9,@card2.value)
end

def test_card_2_has_suit
  assert_equal('hearts',@card2.suit)
end

def test_card_3_has_value
  assert_equal(13,@card3.value)
end

def test_card_3_has_suit
  assert_equal('clubs',@card3.suit)
end

def test_card_4_has_value
  assert_equal(7,@card4.value)
end

def test_card_4_has_suit
  assert_equal('diamonds',@card4.suit)
end

def test_check_for_ace__true
  assert_equal(true,@cardgame.checkforAce(@card1))
end

def test_check_for_ace__false
  assert_equal(false,@cardgame.checkforAce(@card2))
end

def test_highest_card
  assert_equal(@card2,@cardgame.highest_card(@card1,@card2))
end

# def test_highest_card__second_test
#   assert_equal(@card4,@cardgame.highest_card(@card3,@card4))
# end

def test_highest_card__second_test
  assert_equal(@card3,@cardgame.highest_card(@card3,@card4))
end


def test_card_total
  assert_equal("You have a total of 30", CardGame.cards_total(@cards))
end

def test_number_of_cards
assert_equal(4,@cards.count)
end

end
