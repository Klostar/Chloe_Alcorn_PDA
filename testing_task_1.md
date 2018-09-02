### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby
### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

require_relative('card.rb')
class CardGame


  def checkforAce(card)
    if card.value = 1 #should be == not =
      return true
    else
      return false
    end
  end



  dif highest_card(card1 card2) #spelling error on def and missing comma
  if card1.value > card2.value
    return card.name #card 1 not card name
  else
      card2 #return
    end
  end
end #extra end not required

def self.cards_total(cards)
  total # should be equal to zero so as loops round all cards 1 is added to total
  for card in cards
    total += card.value
    return "You have a total of" + total
    #string inerpolation needed "you have a total of #{total}"
  end
  #return should be here not in the loop.
end


```
