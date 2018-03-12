def divide_by_0
    1 / 0
rescue => e
    warn "Warning: #{e}"
end

divide_by_0