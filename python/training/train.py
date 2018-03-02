from filterdataset.main import Filterer

# filterer = Filterer()
filterer = Filterer(attributes_file='python/training/dataset/attributes.txt')
filenames = filterer.get_filenames()

print(filenames)
print(filenames.shape)
