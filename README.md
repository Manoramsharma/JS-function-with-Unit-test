# JS-function-with-Unit-test
The function first creates an output dictionary with keys for each day of the week and values set to zero. It then converts the input dictionary keys to Date objects and sorts them to ensure that the output dictionary is in the correct order. The function then loops through the sorted dates, adding the corresponding values to the output dictionary based on the day of the week.

Next, the function checks if any days are missing in the input dictionary by comparing the keys of the output dictionary to a list of expected days. If any days are missing, the function calculates their values as the mean of the previous and next day's values and adds them to the output dictionary.

Finally, the function returns the output dictionary.
