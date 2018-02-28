def log
  puts "start now"
  yield
  puts "end"
end

log do
  puts "do some important business function"
end

def benchmark
  time_at_start = Time.now
  yield
  time_at_end = Time.now
  puts "This took #{time_at_end - time_at_start} seconds"
end

benchmark do
  # A very long operation
  sleep 5 # seconds
end if false

def transaction
  puts "begin transation"
  yield
  puts "end transation"
end

transaction do
  puts "withdraw $100 dollars from michael"
  puts "depoit $100 dollars to joseph"
end

