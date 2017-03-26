
# coding: utf-8

# In[1]:

import urllib.request


# In[2]:

text = urllib.request.urlopen('http://www.nature.com/article-assets/npg/ncomms/2014/140626/ncomms5212/extref/ncomms5212-s4.txt').read().decode()


# In[3]:

text[:100]


# In[6]:

list1 = text.split('\n')


# In[7]:

newarray = []
for l in list1:
    arr = l.split('\t')
    newarray.append(arr)


# In[8]:

newarray[:100]


# In[50]:

set(list(x[0] for x in newarray))


# In[70]:

# {Symptoms : {disease : weight}}


dic = {}

for row in newarray[1:]:
    if len(row) >= 4:
        sym = row[0]
        disease = row[1]
        weight = row[3]
        if sym in dic:
            dic[sym].append([disease,float(weight)])
        else:
            dic[sym] = []
            dic[sym].append([disease,float(weight)])




# In[71]:

idx = max(dic['Pain'][1])


# In[72]:

idx


# In[73]:

dic['Pain']


# In[74]:

sorted(dic['Pain'], key=lambda x: x[1], reverse=True)


# In[75]:

dic['Fever']


# In[76]:

def diseaseFinder(symptoms):
    diseases = {}
    for symptom in symptoms: 
        l = dic[symptom]
        for item,weight in l:
            if item in diseases:
                diseases[item] += weight
            else:
                diseases[item] = weight
    return diseases


# In[77]:

d = diseaseFinder(['Pain','Fever', 'Fatigue', 'Headache', 'Cough'])


# In[78]:

import operator
sorted_d = sorted(d.items(), key=operator.itemgetter(1),reverse=True)


# In[85]:

[x[0] for x in sorted_d[:10]]


# In[81]:

set(list(x[0] for x in newarray))


# In[ ]:



