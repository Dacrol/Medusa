from filterdataset import Filterer

# filterer = Filterer()
filterer = Filterer(attributes_file='python/training/dataset/attributes.txt')
results = filterer.get_filenames(attributes=(
    'Arched_Eyebrows', 'Black_Hair'), notattributes='Male')

print('Matches: ' + str((results['label'] == 1).sum()))
print('Mismatches: ' + str((results['label'] == -1).sum()))
